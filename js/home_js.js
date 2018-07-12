function music() {
	document.getElementById('cont_people').style.display = "none";
	document.getElementById('music_groups').style.display = "flex";
	document.getElementById('music').style = "border-bottom-width:0";
	document.getElementById('contacts').style = "border-bottom-width:1px";
	document.getElementById('contacts').style.color = "Black";
    document.getElementById('music').style.color = "#CB3131";
}

function contacts() {
	document.getElementById('music_groups').style.display = "none";
	document.getElementById('cont_people').style.display = "flex";
	document.getElementById('contacts').style = "border-bottom-width:0";
	document.getElementById('music').style = "border-bottom-width:1px";
	document.getElementById('contacts').style.color = "#CB3131";
    document.getElementById('music').style.color = "Black";
}

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

function press_contacts(){
	var people = document.getElementsByClassName('people');
	for(var i = 0;i<people.length; i++){
		people[i].classList.add("people_hover");
	}
}

window.onload = function (){
	document.getElementById('contacts').style = "border-bottom-width:0";
	document.getElementById('music_groups').style.display = "none";
	document.getElementById('music').onclick = music;
	document.getElementById('contacts').onclick = function(){
		contacts();
		press_contacts();
	}
	window.onscroll = scroll;
	press_contacts();
};