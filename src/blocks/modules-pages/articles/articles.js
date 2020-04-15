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
        touchThreshold: 100,
        responsive: [{
                breakpoint: 1261,
                settings: {
                    variableWidth: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    });

});