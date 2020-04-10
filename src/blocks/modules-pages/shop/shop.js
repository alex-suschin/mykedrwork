$('.shop-tabs a').click(function() {
    $('.shop-tabs').find('.active').removeClass('active');
    $(this).addClass('active');
    $('.shop-elems').find('.shop-elem').hide();
    $('#' + $(this).data('switch')).show();
});