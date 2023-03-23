chrome.storage.sync.get(['enabledWebsites'], (result) => {
    const enabledWebsites = result.enabledWebsites || [];
  
    const matches = {
      facebook: '*://*.facebook.com/*',
      instagram: '*://*.instagram.com/*',
      reddit: '*://*.reddit.com/*',
      twitter: '*://*twitter.com/*',
      tiktok: '*://*tiktok.com/*',
    };
  
    const currentUrl = window.location.href;
    const styleSheet = 'styles.css';
  
    enabledWebsites.forEach((website) => {
      if (currentUrl.match(matches[website])) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = chrome.runtime.getURL(styleSheet);
        document.head.appendChild(link);
      }
    });
  });
  