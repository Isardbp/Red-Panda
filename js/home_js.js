String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
};

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

var i = 2;
function post_mss() {
	var txt = document.getElementById("post_input").value;
	// language=HTML
    var template= `<div class="mss" >
                <div class="header">
                    <div class="header_img_name">
                        <div class="center_img"><img src="fotos/perfil_2.png"></div>
                        <div class="center_name"><p>Isardbp</p></div>
                    </div>
                    <div class="buttons_center">
                        <button class="edit_but">Edit</button>
                    </div>
                </div>
                <div class="section"><p> {0} </p></div>
            </div>
			`.format(txt);

	$("#center").append(template);
	document.getElementById("post_input").value= "";
	i++;
}

//function delete_but_red(){
//	document.getElementsByClassName('delete_but_com').style.backgroundColor = "red";
//	document.getElementsByClassName('no_delete_but_com').style.backgroundColor = "none";
//}

	$(document).ready(function () {
	    $(".delete_but_com").click(function () {
	    	$(this).addClass('delete_but_com_press');
	        $(".no_delete_but_com").removeClass('no_delete_but_com_press');

	        $(".mss").click(function () {
                    $(this).remove();
            })
        });
	    $(".no_delete_but_com").click(function () {
			$(this).addClass('no_delete_but_com_press');
	        $(".delete_but_com").removeClass('delete_but_com_press');
        })
    });



function press_Write(){
	document.getElementById('myModal').classList.add('modal_emerge');
}

function press_send(){
	document.getElementById('myModal').classList.add('modal_desemerge');
	setTimeout(desemergejs, 300);
}

function desemergejs(){
	document.getElementById('modal').style.display = "none";
	document.getElementById('myModal').classList.remove('modal_desemerge');
	document.getElementById('myModal').classList.remove('modal_emerge');
}


function press_delete(){
	document.getElementById('myModal').classList.add('modal_desemerge_down');
	setTimeout(desemergejs_down, 300);
}

function desemergejs_down(){
	document.getElementById('modal').style.display = "none";
	document.getElementById('myModal').classList.remove('modal_desemerge_down');
	document.getElementById('myModal').classList.remove('modal_emerge');
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
	};

	var modal = document.getElementById('modal');
	var btn = document.getElementById('write');
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function(){
		modal.style.display = "flex";
		press_Write();
	};

	document.getElementById('send_but').onclick = function(){
		press_send();
		post_mss();
	};
	span.onclick = function(){
		press_delete();
	};
	window.onclick = function(event) {
		if (event.target === modal){
			modal.style.display = "none";
		}
	};

//document.getElementsByClassName('delete_but_com').onclick = delete_but_red;
};