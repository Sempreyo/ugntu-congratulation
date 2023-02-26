$(document).ready(function() {
	const subSlider = new Swiper('.js-subslider-single', {
		slidesPerView: 5.8,
		spaceBetween: 18,
		breakpoints: {
			1024: {
				slidesPerView: 6.4,
			},
			1280: {
				slidesPerView: 5.8
			}
		}
	});

	const slider = new Swiper('.js-slider-single', {
		slidesPerView: 1.2,
		spaceBetween: 6,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		thumbs: {
			swiper: subSlider
		},
		breakpoints: {
			768: {
				slidesPerView: 1,
				spaceBetween: 0,
				centeredSlides: false
			},
		}
	});
})