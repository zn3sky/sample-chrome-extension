var counter = 0;
chrome.tabs.getAllInWindow(null, function(tabs) {
	counter = tabs.length;
	chrome.browserAction.setBadgeText({text:String(counter)});
})
;

// タブが追加された
chrome.tabs.onCreated.addListener(function(tab) {
	counter++;
	chrome.browserAction.setBadgeText({text:String(counter)});
});

// タブが削除された
chrome.tabs.onRemoved.addListener(function(tab) {
	counter--;
	chrome.browserAction.setBadgeText({ text:String(counter)});
});
var getCounter = function(){
	return counter;
};