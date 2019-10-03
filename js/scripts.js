; (function () {

	"use strict";

	/*-------------------------------------------------*/
	/* =  preloader
	/*-------------------------------------------------*/
	function loadData() {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, 1000);
		});
	}
	loadData().then(() => {
		let preloader = document.querySelector('.preloader');
		preloader.classList.add('preloader--hidden');
	});


	/*-------------------------------------------------*/
	/* =  load fonts
	/*-------------------------------------------------*/
	function loadFonts(href) {
		const head = document.querySelector('head');
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;
		head.appendChild(link);
	}
	loadFonts('https://fonts.googleapis.com/css?family=Lato:100,300,400,400i,700&amp;subset=latin-ext');



	/*-------------------------------------------------*/
	/* =  navbar-toggle hide when click link open menu
	/*-------------------------------------------------*/
	$('#navbar-tradeinspace .navbar-right a').on('click', function () {
		if ($('.navbar-toggle').css('display') != 'none') {
			$(".navbar-toggle").trigger("click");
		}
	});


	/*-------------------------------------------------*/
	/* =  collapse the navbar on scroll
	/*-------------------------------------------------*/
	$(window).scroll(function () {
		if ($(".navbar").offset().top > 150) {
			$('body').addClass('fixed');
		} else {
			$('body').removeClass('fixed');
		}
	});



	/*-------------------------------------------------*/
	/* =  scrolling feature - requires jQuery Easing plugin
	/*-------------------------------------------------*/
	$(document).on('click', 'a.page-scroll', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 0
		}, 1100, 'easeInOutExpo');
		event.preventDefault();
	});



	/*-------------------------------------------------*/
	/* =  tabs prev/next mobile
	/*-------------------------------------------------*/
	$('#tabs-tradeinspace-teams [class*=next]').click(function () {
		$('.nav-tabs > .active').next('li').find('a').trigger('click');
	});
	$('#tabs-tradeinspace-teams [class*=prev]').click(function () {
		$('.nav-tabs > .active').prev('li').find('a').trigger('click');
	});


	/*-------------------------------------------------*/
	/* =  copyright years
	/*-------------------------------------------------*/
	function showCopyrightYears(){
		const date = new Date();
		const dateYears = date.getFullYear();
		const yearsHTML = document.querySelector('.js-years');
		yearsHTML.textContent = dateYears;
	}
	showCopyrightYears();


})();