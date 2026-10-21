// CSS Filter প্রয়োগ বা রিমুভ করার ফাংশন
function applyGrayscaleFilter() {
  const hostname = window.location.hostname;

  chrome.storage.sync.get(['globalEnabled', 'pausedSites'], (data) => {
    const globalEnabled = data.globalEnabled ?? false;
    const pausedSites = data.pausedSites || [];

    const isPaused = pausedSites.includes(hostname);

    if (globalEnabled && !isPaused) {
      document.documentElement.style.filter = "grayscale(100%)";
    } else {
      document.documentElement.style.filter = "";
    }
  });
}

// পেজ লোড হওয়ার পর ফিল্টার অ্যাপ্লাই
applyGrayscaleFilter();

// Popup থেকে মেসেজ পেলে ফিল্টার আপডেট করা
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "updateFilter") {
    applyGrayscaleFilter();
  }
});
