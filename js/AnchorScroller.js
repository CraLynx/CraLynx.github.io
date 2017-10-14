$(function(){
	$('.button').on('click',null,function(){
		slowScroll($(this).parents('a').data('scroll'));
		$('#wrapper').css('transform','rotate(-'+$(this).data('rotate')+'deg)');
		// $('#button5').css('transform','rotate('+$(this).data('rotate')+'deg)');
		$('.button span').css('transform','rotate('+$(this).data('rotate')+'deg)');
	 });
	Rotator();
});

function slowScroll (id) {
    var offset = 0;
    $('html, body').stop().animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
   
    return false;
  }