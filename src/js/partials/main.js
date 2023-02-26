$(document).ready(function() {
	$('.list-block__sort select').select2();

	/* Partners marquee */
	if (window.matchMedia('(min-width: 768px)').matches) {
		$('.js-marquee').marquee({
			duration: 15000,
			delayBeforeStart: 0,
			duplicated: true,
			gap: 0,
			startVisible: true,
			direction: 'left'
		});
	}

	/* Photo uploader */
	document.querySelector('#file-loader').addEventListener('change', function () {
		var splittedFakePath = this.value.split('\\');

		var elem = $('.form__files-item').first().clone(true);
		elem.find('span').text(splittedFakePath[splittedFakePath.length - 1]);
		elem.appendTo('.form__files').css('display', 'flex');
	});

	$('.form__files-item-remove').on('click', function () {
		$(this).closest('.form__files-item').remove();
	});

	/* Show congratulation form */
	$('.js-congrat').on('click', function (e) {
		e.preventDefault();
		$('.form').addClass('open');
		$('.overlay').addClass('active');
		$('body').addClass('body-scroll-lock');
	});

	$('.form__close-btn').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.form').removeClass('open');
		$('.overlay').removeClass('active');
		$('body').removeClass('body-scroll-lock');
	});

	$('.overlay').on('click', function () {
		$(this).removeClass('active');
		$('.form').removeClass('open');
		$('body').removeClass('body-scroll-lock');
	});

	/* Anchor */
	document.querySelectorAll('.anchor').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
})