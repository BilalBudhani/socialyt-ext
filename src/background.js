browser.browserAction.onClicked.addListener(function(tab) {
  console.log("Hello from the background", tab);

  browser.tabs.executeScript({
    file: "content-script.js"
  });
});
