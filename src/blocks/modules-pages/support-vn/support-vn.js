$('.js-btn-show-info-quest').click(function() {
    $(this).parents('.quest-item').toggleClass('active');
});

$('.support-tabs a').click(function() {
    $('.support-tabs').find('.active').removeClass('active');
    $(this).addClass('active');
    $('.support-elems').find('.support-elem').hide();
    $('#' + $(this).data('switch')).show();
});

$('.tabs-checkbox__item label').click(function() {
    $('.history-request-wrap').find('.history-request').hide();
    $('#' + $(this).data('switch')).show();
});

let fileVal = $('.jq-file__name').text();

console.log(fileVal);

if (fileVal != null) {
    $('.remove-val').show();
} else {
    $('.remove-val').hide();
}


// $('.remove-val').click(function() {
//     console.log(fileVal);
//     fileVal.text('');
// });


$('.btn-show-history-request').click(function() {
    $(this).parents('.history-request-cell').parents('.history-request__item-show').parents('.history-request__item').toggleClass('active');
});