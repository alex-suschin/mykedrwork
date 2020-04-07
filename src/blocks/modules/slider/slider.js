$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        vertical: true,
        infinite: true,
        verticalSwiping: true,
        speed: 700,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                vertical: false,
                verticalSwiping: false,
                adaptiveHeight: true
            }
        }]
    });

});