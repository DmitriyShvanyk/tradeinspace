//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {        
		$('body').addClass('fixed');
    } else {      
	   $('body').removeClass('fixed');
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0 
        }, 1100, 'easeInOutExpo');
        event.preventDefault();
    });
});