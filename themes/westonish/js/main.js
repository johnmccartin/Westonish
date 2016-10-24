var fire = {};

$(document).ready(function(){
	setSizes();
	iconer();


	$('.mobile-menu').on('click','a',function(){
		$(this).parents('.mobile-menu').slideUp();
	});




	$('.content img').addClass('pure-img');
	$(".wp-caption").removeAttr('style');
	$(".pure-img").removeAttr('width').removeAttr('height');


	$(window).load(function(){
		setSizes();
	
	});
	
	$(window).resize(function(){
		setSizes();
	
	});

	$(window).scroll(function(){
	
	});


});

function setSizes() {
	var winW = $(window).width();
	var winH = $(window).height();
	
	var postsW = $(".posts").width();
	var postsH = $(".posts").height();
	var $footer = $(".footer");
	
	if (postsH < winH) {
		
	} else {
		
	}
}

function iconer() {

	console.log('iconer');
	
	$(document).on('click','.closer',function(){
		$(this).parent().fadeOut();
		$('.opener').removeClass('offscreen').addClass('onscreen');
		$(this).removeClass('onscreen').addClass('offscreen');
	});
	
	$(document).on('click','.opener',function(){

		$(this).siblings('.mobile-menu').fadeIn();

		$(this).removeClass('onscreen').addClass('offscreen');
		$('.closer').removeClass('offscreen').addClass('onscreen');
	});
	
}