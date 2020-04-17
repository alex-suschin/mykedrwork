$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '626') {
        $('.articles-box-items__left').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            infinite: false,
            swipeToSlide: true,
            variableWidth: true,
            speed: 700,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100,
            focusOnSelect: true
        });

        $('.last-article__content').insertAfter($('.last-article'));

    }

});