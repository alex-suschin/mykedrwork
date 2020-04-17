$('.decors-cat-tabs a').click(function() {
    $(this).toggleClass('active');
});

$('.filter-show-hide').click(function() {
    $(this).siblings('.filter').slideToggle(300);
    $(this).toggleClass('active');
    // if ($(this).hasClass('active')) {
    //     $('.filter').removeClass('filter-active');
    // } else {
    //     $('.filter').addClass('filter-active');
    // }
});

$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '576') {
        $('.filter-box').insertAfter($('.decors-cat-tabs'));
    }

});