$(document).ready(function(){
  $('.logo').click(function(){
      $('.navigation ul').css('display', 'flex');
  });
    
  //ADD SCROLLING TO ELEMENT
	$(".menuLink").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        // if ($.browser.safari) {
        //     $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость прокрутки
        // } else {
            $('body').animate({ scrollTop: destination }, 600);
            $('.navigation ul').css('display', 'none');
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