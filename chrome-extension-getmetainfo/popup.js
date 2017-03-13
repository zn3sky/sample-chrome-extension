$(function() {
	chrome.tabs.query({}, function(tabs) {
		// タブ数
		$('#tab_count').html(tabs.length);
		
		// 各タブの情報
		var html = "<table border=\"1\"><tr><td>No.</td><td>id</td><td>active</td><td>title</td><td>favIconUrl</td><td>url</td></tr>";
		for (i = 0; i < tabs.length; i++) {
			html += "<tr><td>" + i + "</td><td>" + tabs[i].id + "</td><td>" + 
				tabs[i].active + "</td><td>" + 
				tabs[i].title + "</td><td>" + 
				tabs[i].favIconUrl + "</td><td>" + 
				tabs[i].url + "</td>";
		}
		html += "</table>";
		
		$("#meta_info").html(html);
	
	});
});
