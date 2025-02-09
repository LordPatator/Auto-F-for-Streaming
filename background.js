let supportedSites = [];

// Load supported sites when the extension starts
chrome.storage.local.get(["supportedSites"], (data) => {
    supportedSites = data.supportedSites || [];
});

// Listen for tab updates and check if it's a supported site
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && isSupportedSite(changeInfo.url)) {
        console.log("Navigation detected on supported site:", changeInfo.url);

        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: detectMediaPlayback
        });
    }
});

// Listen for changes in the stored website list and update dynamically
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.supportedSites) {
        supportedSites = changes.supportedSites.newValue;
        console.log("Updated supported sites list:", supportedSites);
    }
});

// Function to check if a site is in the supported list
function isSupportedSite(url) {
    return supportedSites.some(site => url.includes(site));
}

// Function injected into supported sites to detect video playback
function detectMediaPlayback() {
    console.log("Script injected into the page.");

    let videoPlayed = false;

    document.addEventListener("play", function(event) {
        if (event.target.tagName === "VIDEO" && !videoPlayed) {
            videoPlayed = true;
            console.log("Video detected playing. Waiting 2 seconds...");

            setTimeout(() => {
                console.log("Sending 'F' key press after delay.");
                document.dispatchEvent(new KeyboardEvent("keydown", {
                    key: "f",
                    code: "KeyF",
                    keyCode: 70,
                    bubbles: true
                }));
            }, 2000);
        }
    }, true);
}
