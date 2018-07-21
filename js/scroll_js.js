function scroll() {
	var h = document.body.getBoundingClientRect().height;
	var lim = h * 0.35 * 0.80;
	if (document.body.scrollTop > lim || document.documentElement.scrollTop > lim){
		document.getElementById("menu").style.position = "fixed";
	}
	else{
		document.getElementById("menu").style.position = "static";
	}
}
window.onload = function (){
	window.onscroll = scroll;
	press_contacts();
};