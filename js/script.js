$(document).ready(function(){

	//ADD HEADER SLIDER
	$('.slickWrapper').slick({
		autoplay: true,
  		autoplaySpeed: 4000,
  		pauseOnHover: false,
        fade: true,
     });

	//ADD PRICES SLIDER
	  $('.slider').slick({
	 	slidesToShow: 1,
	 	slidesToScroll: 1,
	 	arrows: false,
	 	fade: false,
	 	autoplay: true,
  		autoplaySpeed: 4000,
  		pauseOnHover: false,
	 	asNavFor: '.slider-nav-thumbnails',
	 });

	 $('.slider-nav-thumbnails').slick({
	 	slidesToShow: 5,
	 	slidesToScroll: 1,
	 	asNavFor: '.slider',
	 	dots: true,
	 	focusOnSelect: true
	 });

	 // Remove active class from all thumbnail slides
	 $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

	 // Set active class to first thumbnail slides
	 $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

	 // On before slide change match active thumbnail to current slide
	 $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	 	var mySlideNumber = nextSlide;
	 	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
	 	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
	});

	//ADD SCROLLING TO ELEMENT
	$(".menuLink").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        // if ($.browser.safari) {
        //     $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость прокрутки
        // } else {
            $('body').animate({ scrollTop: destination }, 600);
        // }
        return false; 
    }); 

    //ADD AJAX CONTACT NUMBER DATA TO SERVER
    $('.callButton').click(function(){
    	var pattern = /^\d[\d\(\)\ -]{4,14}\d$/;
    	var number = $( '.callNumberInput' ).val();
    	var valid = pattern.test(number);
    	if(number !== '') {
    		if(valid) {
    			$.post(
					"inc/mailer.php",
					{
					  	callNumber: number,
					},
					  function(data){
					  	alert("Номер успешно отправлен !");
					  	$( '.callNumberInput' ).val('');
					}
				);
    		} else {
    			alert("Укажите правильно Ваш номер телефона !");
    			$( '.callNumberInput' ).val('');
    		}	
    	} else {
    		alert("Укажите правильно Ваш номер телефона !");
    		$( '.callNumberInput' ).val('');
    	}
		
	});	

});