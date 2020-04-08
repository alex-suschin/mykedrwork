$(document).ready(function() {
    $('.articles-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        swipeToSlide: true,
        variableWidth: true,
        speed: 700,
        dotsClass: 'dots',
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
    });

});