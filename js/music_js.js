function scroll() {
	var h = document.body.getBoundingClientRect().height;
	var lim = h * 0.35 * 0.80;
	console.log(document.documentElement.scrollTop);
	console.log(document.documentElement.scrollTop >1);
	if (document.body.scrollTop > lim || document.documentElement.scrollTop > lim){
		console.log("aaaaaaa");
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