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

// setInterval(function() {
//     let fileTag = $('.jq-file');


//     if (fileTag.hasClass('changed')) {
//         fileTag.parents('.file').children('.remove-val').show();
//     } else {
//         fileTag.parents('.file').children('.remove-val').hide();
//     }

//     $('.remove-val').click(function() {
//         $('.jq-file__name').html('');
//     });
// }, 500);


setInterval(function() {
    let fileTag = $('.jq-file__name');


    if (fileTag.html() == "") {
        fileTag.parents('.changed').siblings('.remove-val').hide(1);
    } else {
        fileTag.parents('.changed').siblings('.remove-val').show(1);
    }

    $('.remove-val').click(function() {
        fileTag.html('');
    });
}, 500);








$('.btn-show-history-request').click(function() {
    $(this).parents('.history-request-cell').parents('.history-request__item-show').parents('.history-request__item').toggleClass('active');
});