$(function() {
	$("#includeHeader").load("header.html");
	$("#includeFooter").load("footer.html");
});

function activateHeader(page) {
	console.log(page);
	var id = NavigationOb[page].id;
	$("#" + id).addClass("active");
}