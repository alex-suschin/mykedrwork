$('.js-name-profile').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).siblings('.box-profile__dropdown').show(300);
    } else {
        $(this).removeClass('active');
        $(this).siblings('.box-profile__dropdown').hide(300);
    }

});

$('.js-cart').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).children('.cart-dropdown').show(300);
    } else {
        $(this).removeClass('active');
        $(this).children('.cart-dropdown').hide(300);
    }

});