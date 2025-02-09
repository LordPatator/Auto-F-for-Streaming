# Auto-F for video streaming

## Description

The **Auto-F for video streaming** is a chromium browser extension designed to automatically detect video playback on specific websites and simulate pressing the "F" key 2 seconds after the video starts playing.

This extension can be configured to work with a list of supported websites, and allows users to add or remove websites from the list directly within the extension.

---

## Features

- Automatically detects when a video starts playing on a supported website.
- Sends an "F" keypress event after a 2-second delay.
- Users can add or remove websites to/from the supported list directly via the extension's settings page.
- Dynamic updates: the supported sites list is updated automatically without the need to reload the extension.

---

## Installation

1.  **Download the extension on the chrome extension store**:
    
2.  **Clone or Download the Repository**:
   - Download the extension files to your local machine.

3. **Enable Developer Mode in Brave/Chrome**:
   - Go to `brave://extensions/` or `chrome://extensions/` in your browser.
   - Toggle on **Developer Mode** (top-right corner).

4. **Load the Extension**:
   - Click on **Load unpacked** and select the folder containing the extension files.

5. **Add Your Supported Websites**:
   - Open the extension's settings and add/remove websites where you want the "F" keypress to be triggered on video playback.

---

## How It Works

1. The extension listens for **URL changes** in supported websites.
2. Once a URL matches a supported website, the extension injects a script into the page to **detect when a video starts playing**.
3. Upon detecting playback, the extension waits **2 seconds** and then simulates pressing the "F" key on the keyboard. This is done to try to be as universal as possible, while not clicking on anything so that there are no pop-up tabs.
4. The "F" key will only be pressed once every URL change.

### Supported Website List

You can add or remove websites to the list of supported sites from the extension's settings page. The list is stored using **Chrome/Brave storage API** and updated dynamically without requiring a browser reload.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE] file for details.

---

## Credits

- Developed by: LordPatator
- Based on the **MIT License**
- This project was almost entirely developed with ChatGPT (OpenAI).


---

## How to Contribute

Feel free to fork this repository, make improvements, or submit bug reports and feature requests.

---

## Contact

For any questions or issues, please contact me at lordpatator.contact@gmail.com 

---

## License (MIT)

```
MIT License

Copyright (c) 2025 LordPatator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
