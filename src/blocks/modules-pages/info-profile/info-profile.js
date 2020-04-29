$('.js-arr-popup-pers').click(function() {
    $('#popup-pers-wrap').addClass('popup-active');
    $('#popup-pers-wrap').find('#popup-pers').addClass('popup-active');
    $('html').addClass('ov-h');
});
$('.js-close-popup-pers').click(function() {
    $('#popup-pers-wrap').removeClass('popup-active');
    $('#popup-pers-wrap').find('#popup-pers').removeClass('popup-active');
    $('html').removeClass('ov-h');
});
$('.js-arr-popup-law').click(function() {
    $('#popup-law-wrap').addClass('popup-active');
    $('#popup-law-wrap').find('#popup-law').addClass('popup-active');
    $('html').addClass('ov-h');
});
$('.js-close-popup-law').click(function() {
    $('#popup-law-wrap').removeClass('popup-active');
    $('#popup-law-wrap').find('#popup-law').removeClass('popup-active');
    $('html').removeClass('ov-h');
});

$('.date-input').click(function() {
    $(this).datepicker({
        position: "bottom left",
        offset: 30
    });
    $(this).trigger('focus');
    $(this).data('datepicker');
});





// $(document).mouseup(function(e) {
//     var container = $('.popup');
//     if (container.hasClass('popup-active')) {
//         if (container.has(e.target).length === 0) {
//             $('.popup-wrap').removeClass('popup-active');
//             $('.popup-wrap').find('.popup').removeClass('popup-active');
//         }
//     }
// });