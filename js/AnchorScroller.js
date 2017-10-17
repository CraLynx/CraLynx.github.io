$(function(){
	$('.button').on('click',null,function(){
		slowScroll($(this).parents('a').data('scroll'));
		$('#wrapper').css('transform','rotate(-'+$(this).data('rotate')+'deg)'); //Вращение всех кнопок с фиксированный углом указанным в кнопке <div..> 
		// $('#button5').css('transform','rotate('+$(this).data('rotate')+'deg)');
		$('.button span').css('transform','rotate('+$(this).data('rotate')+'deg)'); //Для вращения изображения home в обратную сторону	

	 });
		
});

function slowScroll (id) {   //Функция для прокрутки страницы "Якорь"
    var offset = 0;
    $('html, body').stop().animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
   
    return false;
  }