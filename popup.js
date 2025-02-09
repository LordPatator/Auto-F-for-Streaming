// Load stored websites on popup open
document.addEventListener("DOMContentLoaded", async () => {
    const siteList = document.getElementById("site-list");
    const addButton = document.getElementById("add-site");
    const removeButton = document.getElementById("remove-site");

    // Fetch stored websites
    chrome.storage.local.get(["supportedSites"], (data) => {
        let sites = data.supportedSites || [];
        displaySites(sites);
    });

    // Get the current tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let url = new URL(tabs[0].url);
        let domain = url.hostname;

        addButton.onclick = () => modifySiteList(domain, "add");
        removeButton.onclick = () => modifySiteList(domain, "remove");
    });

    function displaySites(sites) {
        siteList.innerHTML = "";
        sites.forEach(site => {
            let li = document.createElement("li");
            li.textContent = site;
            siteList.appendChild(li);
        });
    }

    function modifySiteList(domain, action) {
        chrome.storage.local.get(["supportedSites"], (data) => {
            let sites = data.supportedSites || [];
            
            if (action === "add" && !sites.includes(domain)) {
                sites.push(domain);
            } else if (action === "remove") {
                sites = sites.filter(site => site !== domain);
            }

            chrome.storage.local.set({ supportedSites: sites }, () => {
                displaySites(sites);
            });
        });
    }
});
