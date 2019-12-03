const navSlide = () => {
	const burguer = document.querySelector('.burguer');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burguer.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});

		burguer.classList.toggle('toggle');
	});
}

navSlide();

$('.js--scroll-to-features').click(function(){
	$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});

$('.js--scroll-to-home').click(function(){
	$('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000);
});

$('.js--scroll-to-team').click(function(){
	$('html, body').animate({scrollTop: $('.js--section-team').offset().top}, 1000);
});

$('.js--scroll-to-pricing').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-pricing').offset().top}, 1000);
});

$('.js--scroll-to-contact').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
});

$('.js--scroll-to-gallery').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-gallery').offset().top}, 1000);
});
