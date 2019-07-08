//Массив-объектов для карттинок
var pictures = [
				{text:"Озеро. г. Балашиха.", image:"image/SectionWins/Photo/Lake.jpg"},
				{text:"Заросшая речка. Владимирская обл., п. Пакино.", image:"image/SectionWins/Photo/Swamp.jpg"},
				// {text:"somet hingtext", image:"image/mainweb.jpg"},
				// {text:"стена", image:"image/background1.jpg"},
				// {text:"somet hingtext", image:"image/mainweb.jpg"}
			];

$(function(){
	$('.button').on('click',null,function(){
		slowScroll($(this).parents('a').data('scroll'));
		$('#wrapper').css('transform','rotate(-'+$(this).data('rotate')+'deg)'); //Вращение всех кнопок с фиксированный углом указанным в кнопке <div..> 
		// $('#button5').css('transform','rotate('+$(this).data('rotate')+'deg)');
		$('.button span').css('transform','rotate('+$(this).data('rotate')+'deg)'); //Для вращения изображения home в обратную сторону	
	 });
	
	$(window).resize(function(){
		WinResize();
	});

	//Доваление картинок в "Достижения" при зарузке страницы
	for (var i in pictures){
		$('#photogalary').append('<div class="col-md-4"><div class="photo1" style="background-image:url('+pictures[i].image+');" data-image="'+pictures[i].image+'">++</div>	</div>');
	};

	//Модальное окно при клики на картинку(текст + картинка)
	$('#photogalary .col-md-4 .photo1').click(function(){
		var id = $(this).index('#photogalary .col-md-4 .photo1');
		$('#exampleModal .modal-header').html(pictures[id].text);
		$('#exampleModal .modal-body').html('<img class="img-fluid" src="'+pictures[id].image+'">');
		$('#exampleModal').modal('show');
	});

	WinResize();
	ScrlSpy();	
});

//Функция для прокрутки страницы "Якорь"
function slowScroll (id) {   
    var offset = 0;
    $('html, body').stop().animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);   
    return false;
  }
 
//Масштабирование окон при изменении размера окна
function WinResize() {
	 $('#home').height($(window).height());
	 $('#aboutme').height($(window).height());
	 $('#wins').height($(window).height());
	 $('#education').height($(window).height());
	 $('#contact').height($(window).height());
}




