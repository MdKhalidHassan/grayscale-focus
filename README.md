# 👁️ grayscale-focus — Smart Grayscale Mode for Web Browsing

> **Reduce digital eye strain with a single click.** Switch your browser to comfortable grayscale mode globally, while easily retaining full color on your favorite media sites.

---

## ✨ Features

- **🌐 Global Grayscale Mode:** Instantly transform every website into a clean, monochrome theme to reduce eye fatigue and screen addiction.
- **⏸️ Smart Site Exclusions (Pause Feature):** Need to view photos or videos in full color on sites like Facebook, YouTube, or Pinterest? Pause grayscale for specific websites with a single click!
- **💾 Persistent Settings:** Your active preferences and domain rules are safely saved using `chrome.storage.sync`. They stay saved even after closing or restarting your browser.
- **⚡ Lightweight & Fast:** Built using Chrome **Manifest V3** with zero external dependencies or heavy libraries. Runs smoothly without slowing down web page renders.
- **🔒 Privacy-Focused:** Operates completely offline. No tracking, no user data collection, no external requests.

---

## 🛠️ Installation Guide

Since this extension is currently in open-source development, you can load it directly into Google Chrome:

1. **Clone or Download this Repository:**
   ```bash
   git clone [https://github.com/your-username/grayscale-focus.git](https://github.com/your-username/grayscale-focus.git)

   (Or click Code > Download ZIP and extract it to a folder).

Open Google Chrome and navigate to:

Plaintext


chrome://extensions/
Enable Developer mode using the toggle switch in the top right corner.

Click on the Load unpacked button in the top left corner.

Select the folder containing the extension files.

🎯 How to Use
Click the grayscale-focus icon in your Chrome extension bar.

Toggle Global Grayscale to turn grayscale mode ON or OFF for all websites.

To view a specific website in its original full color, click Show Real Color (Pause).

To reactivate grayscale on that specific site later, click Show Grayscale on this site.

🏗️ Tech Stack & Architecture
Manifest Version: V3

Languages: HTML5, CSS3, JavaScript (Vanilla ES6+)

Storage API: chrome.storage.sync

Scripting API: Chrome Content Scripts & Messaging

