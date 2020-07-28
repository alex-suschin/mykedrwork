$('.ecomily-tabs a').click(function() {
    $('.ecomily-tabs').find('.active').removeClass('active');
    $(this).addClass('active');
    $('.ecomily-elems').find('.ecomily-elem').hide();
    $('#' + $(this).data('switch-eco')).show();
});