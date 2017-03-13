$(function() {
	var backgroundPage  = chrome.extension.getBackgroundPage();
	
	chrome.tabs.query({}, function(tabs) {
		// タブ数取得
		$('#tab_count').html(backgroundPage.getCounter());
		
		var html = "<table border=\"1\"><tr><td>id</td><td>active</td><td>title</td><td>favIconUrl</td><td>url</td></tr>";
		for (i = 0; i < tabs.length-1; i++) {
			html += "<tr><td>" + tabs[i].id + "</td><td>" + 
				tabs[i].active + "</td><td>" + 
				tabs[i].title + "</td><td>" + 
				tabs[i].favIconUrl + "</td><td>" + 
				tabs[i].url + "</td>";
		}
		html += "</table>";
		
		$("#meta_info").html(html);
	});
});
