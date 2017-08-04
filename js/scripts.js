;(function($){
	
	"use strict";
	
	/*-------------------------------------------------*/
    /* =  preloader
    /*-------------------------------------------------*/
	$(window).on('load', function () {
		var $preloader = $('.b-preloader'),
			$spinner   = $preloader.find('.b-preloader__spinner');
			$spinner.fadeOut();
			$preloader.delay(350).fadeOut('slow');
	});
		
	/*-------------------------------------------------*/
    /* =  fonts
    /*-------------------------------------------------*/
	$("head").append('<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,400i,700&amp;subset=latin-ext" rel="stylesheet">');
	
	
	/*-------------------------------------------------*/
    /* =  navbar-toggle hide when click link open menu
    /*-------------------------------------------------*/
	$('#navbar-tradeinspace .navbar-right a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
	
	/*-------------------------------------------------*/
    /* =  Smoothscroll
    /*-------------------------------------------------*/
	$.srSmoothscroll({
		// defaults
		step: 55,
		speed: 400,
		ease: 'swing',
		target: $('body'),
		container: $(window)
	});
	
	
	
	/*-------------------------------------------------*/
    /* =  tabs prev/next mobile
    /*-------------------------------------------------*/
	$('#tabs-tradeinspace-teams [class*=next]').click(function(){
	  $('.nav-tabs > .active').next('li').find('a').trigger('click');
	});
	  $('#tabs-tradeinspace-teams [class*=prev]').click(function(){
	  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
	});	
	
	
})(window.jQuery);