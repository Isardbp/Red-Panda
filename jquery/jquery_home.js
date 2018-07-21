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