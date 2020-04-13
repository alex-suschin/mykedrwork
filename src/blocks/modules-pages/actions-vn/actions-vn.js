$(document).ready(function() {
    $('.actions-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        swipeToSlide: true,
        speed: 700,
        variableWidth: true,
        dotsClass: 'dots',
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        focusOnSelect: true
    });

});