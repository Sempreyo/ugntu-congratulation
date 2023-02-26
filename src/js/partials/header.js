$(document).ready(function() {
	var burger = $('.sidebar__burger');
	var closeMenu = $('.header-mobile__close-btn');
	var header = $('.header');
	var headerMob = $('.header-mobile');
	var headerOffset = header.offset().top;
	var headerHeight = header.outerHeight();
	var scroll = $(window).scrollTop();
	var isScroll = false;

	burger.click(function () {
		if (!headerMob.hasClass('open')) {
			headerMob.addClass('open');
			$('body').addClass('body-scroll-lock');
		}
	});

	closeMenu.click(function () {
		headerMob.removeClass('open');
		$('body').removeClass('body-scroll-lock');
	});

	$(window).on('scroll', function () {
		if (window.matchMedia('(min-width: 1280px)').matches) {
			scroll = $(window).scrollTop();

			if (scroll >= headerOffset + headerHeight) {
				isScroll = true;

				headerHeight = isScroll ? header.outerHeight() : null;
				header.addClass('header--fixed');

				if (!header.hasClass('is-fixed')) {
					header.css({'top': -headerHeight + 'px', 'transform': 'translateY(' + headerHeight + 'px)'}).addClass('is-fixed');
					if (!header.hasClass('header--overlay')) {
						$('body').css('padding-top', headerHeight + 'px');
					}
				}
			} else {
				isScroll = false;
				header.removeClass('header--fixed' + ' ' + 'is-fixed').removeAttr('style');
				if (!header.hasClass('header--overlay')) {
					$('body').css('padding-top', 0);
				}
			}
		}
	});
})