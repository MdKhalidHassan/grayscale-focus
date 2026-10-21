document.addEventListener('DOMContentLoaded', async () => {
  const globalToggle = document.getElementById('globalToggle');
  const siteToggleBtn = document.getElementById('siteToggleBtn');
  const domainInfo = document.getElementById('currentDomain');

  // বর্তমান ট্যাবের ডোমেইন নাম নেওয়া
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url || tab.url.startsWith('chrome://')) {
    domainInfo.textContent = "Cannot run on Chrome settings";
    siteToggleBtn.disabled = true;
    return;
  }

  const url = new URL(tab.url);
  const hostname = url.hostname;
  domainInfo.textContent = `Site: ${hostname}`;

  // Storage থেকে তথ্য রিড করা
  chrome.storage.sync.get(['globalEnabled', 'pausedSites'], (data) => {
    const globalEnabled = data.globalEnabled ?? false;
    const pausedSites = data.pausedSites || [];

    globalToggle.checked = globalEnabled;
    const isPaused = pausedSites.includes(hostname);

    updateSiteButtonUI(isPaused);
  });

  // Global Toggle Change Event
  globalToggle.addEventListener('change', () => {
    const isEnabled = globalToggle.checked;
    chrome.storage.sync.set({ globalEnabled: isEnabled }, () => {
      notifyTab(tab.id);
    });
  });

  // Pause / Resume for Current Site Event
  siteToggleBtn.addEventListener('click', () => {
    chrome.storage.sync.get(['pausedSites'], (data) => {
      let pausedSites = data.pausedSites || [];
      const index = pausedSites.indexOf(hostname);

      if (index > -1) {
        // Unpause (আবার গ্রে স্কেল করবে)
        pausedSites.splice(index, 1);
      } else {
        // Pause (অরিজিনাল কালার দেখাবে)
        pausedSites.push(hostname);
      }

      chrome.storage.sync.set({ pausedSites }, () => {
        const isPaused = pausedSites.includes(hostname);
        updateSiteButtonUI(isPaused);
        notifyTab(tab.id);
      });
    });
  });

  function updateSiteButtonUI(isPaused) {
    if (isPaused) {
      siteToggleBtn.textContent = "Show Grayscale on this site";
      siteToggleBtn.classList.remove('btn-pause');
      siteToggleBtn.classList.add('active');
    } else {
      siteToggleBtn.textContent = "Show Real Color (Pause)";
      siteToggleBtn.classList.remove('active');
      siteToggleBtn.classList.add('btn-pause');
    }
  }

  function notifyTab(tabId) {
    chrome.tabs.sendMessage(tabId, { action: "updateFilter" });
  }
});
