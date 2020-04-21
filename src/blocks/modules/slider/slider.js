$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        infinite: false,
        swipeToSlide: true,
        touchThreshold: 100,
        speed: 900,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        focusOnSelect: true,
        asNavFor: '.slider-img'
    });

    $('.slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        fade: true,
        speed: 900,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        swipeToSlide: true,
        touchThreshold: 100,
        focusOnSelect: true,
        asNavFor: '.slider',
        responsive: [{
            breakpoint: 575,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                focusOnSelect: true
            }
        }]
    });
});