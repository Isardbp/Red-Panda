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
		document.getElementById("menu").style.position = "fixed";
	}
	else{
		document.getElementById("menu").style.position = "static";
	}
}

function modal(){
	var modal = document.getElementById('myModal');
	var btn = document.getElementById('write');
	var span = document.getElementsByClassName("close")[0];

}


function post_mss() {
	var template= `<div class="mss">
                <div class="header">
                    <div class="header_img_name">
                        <div class="center_img"><img src="fotos/perfil_2.png"></div>
                        <div class="center_name"><p>Isardbp</p></div>
                    </div>
                    <div class="buttons_center">
                        <button class="edit_but">Edit</button>
                        <button class="delete_but">Delete</button>
                    </div>
                </div>
                <div class="section"></div>
                <div class="footer"></div>
            </div>`



}

function press_Write(){
	document.getElementById('myModal').classList.add('modal_emerge');
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

	var modal = document.getElementById('modal');
	var btn = document.getElementById('write');
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function(){
		modal.style.display = "flex";
		press_Write();

	}
	span.onclick = function(){
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modal){
			modal.style.display = "none";
		}
	}

};