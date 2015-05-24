$.fn.airScroll = function(option){

	var progress = {};

	progress.pageHeight = $(this).height();
	progress.windowHeight = $(window).height();
	progress.startScroll = $(this).position().top;
	progress.divHeight = $(this).outerHeight();
	progress.ratio = (progress.pageHeight) / (progress.windowHeight);
	// console.log()

	progress.events = function(){
		$(window).on('scroll',function(){
			var currentScroll = $(this).scrollTop() - progress.startScroll;
			var itemSize = $('.balloon-container img').height();
			// var scrollPercentage = ((progress.divHeight - progress.windowHeight)) * 100;
			var scrollPercentage = ((currentScroll)/(progress.divHeight - progress.windowHeight));
			// (currentScroll - progress.ratio) * 100;
			$('.balloon-container img').css({
									'top': scrollPercentage 
								});
			console.log(scrollPercentage);
		});
	};

	progress.init = function() {
		progress.events();
	};

	progress.init();

};