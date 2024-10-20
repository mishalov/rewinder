chrome.runtime.onMessage.addListener(function (request) {
  const { contentScriptQuery, aValue } = request;

  if (contentScriptQuery === 'setAValue') {
    chrome.storage.local.set({ aValue });
  }
});
