$(function() {
	$("#includeHeader").load("header.html");
	$("#includeFooter").load("footer.html");
	$("#includeDisqus").load("disqus.html");
});

function activateHeader(page) {
	console.log(page);
	var id = NavigationOb[page].id;
	$("#" + id).addClass("active");
}

function activateDisqus() {
	$("#includeDisqus").load("disqus.html");
}