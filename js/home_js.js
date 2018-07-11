function music() {
	document.getElementById('cont_people').style.display = "none";
	document.getElementById('music_groups').style.display = "flex";
	document.getElementById('music').style = "border-bottom-width:0";
	document.getElementById('contacts').style = "border-bottom-width:1px";
}

function contacts() {
	document.getElementById('music_groups').style.display = "none";
	document.getElementById('cont_people').style.display = "flex";
	document.getElementById('contacts').style = "border-bottom-width:0";
	document.getElementById('music').style = "border-bottom-width:1px";

}

window.onload = function (){
	document.getElementById('contacts').style = "border-bottom-width:0";
	document.getElementById('music_groups').style.display = "none";
	document.getElementById('music').onclick = music;
	document.getElementById('contacts').onclick = contacts;
};