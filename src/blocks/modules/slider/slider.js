$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        vertical: true,
        infinite: true,
        verticalSwiping: true,
        adaptiveHeight: true,
        // fade: true,
        focusOnSelect: true
    });

});