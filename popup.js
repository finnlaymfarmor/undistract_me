const websiteList = document.getElementById('websiteList');
const websiteCheckboxes = websiteList.querySelectorAll('input[type="checkbox"]');

function updateMatches() {
  const enabledWebsites = Array.from(websiteCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  chrome.storage.sync.set({ enabledWebsites }, () => {
    console.log('Enabled websites saved:', enabledWebsites);
  });
}

chrome.storage.sync.get(['enabledWebsites'], (result) => {
  const enabledWebsites = result.enabledWebsites || [];

  websiteCheckboxes.forEach(checkbox => {
    checkbox.checked = enabledWebsites.includes(checkbox.value);
    checkbox.addEventListener('change', updateMatches);
  });
});
