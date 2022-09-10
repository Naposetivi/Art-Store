$(document).ready(function () {
	$('.header__burger').click(function (_event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
});
let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.header-page__navigation',
	},
	slidesPerView: 'auto',
	initialSlide: 2,
	centeredSlides: true,
});
const slides = document.querySelectorAll('.swiper-slide');
const body = document.querySelector('body');
// Основна перевірка
if (slides.length > 0) {
	for (let index = 0; index < slides.length; index++) {
		const slide = slides[index];
		slide.addEventListener('click', function () {
			slideActive(slide);
		});
	}
}
// Відкривання
function slideActive(slide) {
	if (slide) {
		const slidesActive = document.querySelector('.active-slide');
		if (slidesActive) {
			slideClose(slidesActive);
		}
		slide.classList.add('active-slide');
		body.addEventListener('click', function (e) {
			if (!((e.target).closest('.active-slide'))) {
				slideClose(slide.closest('.active-slide'));
			}
		});
	}
}
// закривання
function slideClose(active) {
	active.classList.remove('active-slide');
}