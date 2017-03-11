$(function(){
	var backgroundPage  = chrome.extension.getBackgroundPage();
	$('#counter').val(backgroundPage.getCounter());
});
