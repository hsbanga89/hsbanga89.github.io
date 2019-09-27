// Date and Time - Javascript //

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
	document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
	setTimeout(startTime, 1000);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

$(function(){
	$(".gallery li img").hover(function(){
		$(".main-img").attr("src",$(this).attr("src").replace("thumb/",""));
	});
});
