$(document).ready(function(){
	$('.stages_but').click(function(){
		if ( $(this).hasClass("stages_but_slide1") ) {
			$(".stages_line_act").addClass('stages_line_act2');
			$(".stages_active").text('02');
            $(".info_cont").fadeOut();
            $(".info_cont2").delay(1000).fadeIn();
			$(this).removeClass('stages_but_slide1');
            $(this).addClass('stages_but_slide2');
		}else if ( $(this).hasClass("stages_but_slide2") ) {
            $(".stages_line_act").removeClass('stages_line_act2');
			$(".stages_line_act").addClass('stages_line_act3');
			$(".stages_active").text('03');
			$(".info_cont2").fadeOut();
            $(".info_cont3").delay(1000).fadeIn();
		}

    });
		
});