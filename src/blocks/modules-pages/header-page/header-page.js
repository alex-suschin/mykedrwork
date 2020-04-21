$('.js-name-profile').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).siblings('.box-profile__dropdown').show(300);
        $('.cart-dropdown').hide(300);
        $('.cart').removeClass('active');
    } else {
        $(this).addClass('active');
        $(this).siblings('.box-profile__dropdown').hide(300);
    }

});

$('.js-cart').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).children('.cart-dropdown').show(300);
        $('.box-profile__dropdown').hide(300);
        $('.name-profile').removeClass('active');
    } else {
        $(this).removeClass('active');
        $(this).children('.cart-dropdown').hide(300);
    }

});


$(document).mouseup(function(e) {
    var containerBoxProfile = $('.box-profile__dropdown');
    if (containerBoxProfile.has(e.target).length === 0) {
        $('.avatar-profile').removeClass('active');
        $('.name-profile').removeClass('active');
        $('.box-profile__dropdown').hide(300);
    }
});

$(document).mouseup(function(w) {
    var containerCart = $('.cart-dropdown');
    if (containerCart.has(w.target).length === 0) {
        $('.cart').removeClass('active');
        $('.cart-dropdown').hide(300);
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