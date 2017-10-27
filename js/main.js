$(function(){
	$('.button').on('click',null,function(){
		slowScroll($(this).parents('a').data('scroll'));
		$('#wrapper').css('transform','rotate(-'+$(this).data('rotate')+'deg)'); //Вращение всех кнопок с фиксированный углом указанным в кнопке <div..> 
		// $('#button5').css('transform','rotate('+$(this).data('rotate')+'deg)');
		$('.button span').css('transform','rotate('+$(this).data('rotate')+'deg)'); //Для вращения изображения home в обратную сторону	
	 });
	
	$(window).resize(function(){
		WinResize();
		// alert('124124');
	});

	WinResize();
	ScrlSpy();	
});

function slowScroll (id) {   //Функция для прокрутки страницы "Якорь"
    var offset = 0;
    $('html, body').stop().animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
   
    return false;
  }
 
function WinResize() {
	 $('#home').height($(window).height());
	 $('#aboutme').height($(window).height());
	 $('#wins').height($(window).height());
	 $('#education').height($(window).height());
	 $('#contact').height($(window).height());
}




