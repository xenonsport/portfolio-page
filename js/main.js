$(function(){

  $(".menu__item a").on("click", function (event) {
		event.preventDefault();
    
    var id  = $(this).attr('href'),

		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1000);
	});

    $('.header__menu-btn, .menu__link').click(function(event){

      $('.header__menu,.header__top,.header__menu-btn').toggleClass('menu--active');  

    });

    var mixer = mixitup('.projects__content');

    $(document).scroll(function(){
      var scroll = $(this).scrollTop();
      var nav = $('#top-line');
      if (scroll > 0) {
        if (!nav.hasClass('active')) {
          nav.addClass('active');
        }
      } else {
        if (nav.hasClass('active')) {
          nav.removeClass('active');
        }
      }
    });

});