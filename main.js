$(document).ready(function(){
	$("ul").hide();
	$("ul li:odd").css("background-color", "#efefef");
	$("h3").click(function(){
		$(this).next().slideToggle();
	});
});

