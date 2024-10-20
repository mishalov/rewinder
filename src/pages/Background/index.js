chrome.runtime.onMessage.addListener(function (request) {
  const { contentScriptQuery, aValue } = request;

  if (contentScriptQuery === 'setAValue') {
    chrome.storage.sync.set({ aValue: aValue });
  }
});
