 $(document).ready(function(){
    //sticky nav
$(".navbar").sticky({
    topSpacing: 0,
    zIndex: 9999
});
var mixer = mixitup('.grid');

 $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
 // Owl-carousel

    $('.testimonials-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    });
    /* One Page Nav */
$('.navbar-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    easing: 'swing',
    scrollOffset: 60
});
});
let hamburger = document.querySelector('.hamburger');
		hamburger.addEventListener('click', function(){
			this.classList.toggle('active');
		});