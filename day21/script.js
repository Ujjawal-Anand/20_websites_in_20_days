function scrollFooter(scrollY,heightFooter) {
	if(scrollY >= heightFooter)
	{
		$("footer").css({
			"bottom": "0px"
		});
	}
	else
	{
		$("footer").css({
			"bottom": '-' + heightFooter + 'px'
		});
	}
}


$(window).load(function(){
	var windowHeight = $(window).height(),
        headerHeight = $('header').height(),
	    footerHeight = $('footer').height(),
	    contentHeight = $('.content').height(),
	    heightDocument = headerHeight + contentHeight + footerHeight - 20;

	$('#scroll-animate, #scroll-animate-main').css({
		"height": heightDocument + 'px'
	});

	$('header').css({
		"height" : headerHeight +'px',
		"line-height" : headerHeight + 'px'
	});

	$('#parallax-wrapper').css({
		"margin-top" : headerHeight + 'px'
	});


	scrollFooter(window.scrollY,footerHeight);

	window.onscroll = function(){
		var scroll = window.scrollY;
		$('#scroll-animate-main').css({
			'top': '-' + scroll + 'px'
		});

		$('header').css({
			'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
		});

		scrollFooter(scroll,footerHeight);
	}
});