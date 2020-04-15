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


$('.hamburger').click(function() {
    $(this).toggleClass('on-act');
    if ($(this).hasClass('on-act')) {
        $('ul.menu-lk').addClass('on-act');
        $('body').addClass('noscroll');
    } else {
        $('ul.menu-lk').removeClass('on-act');
        $('body').removeClass('noscroll');
    }
});