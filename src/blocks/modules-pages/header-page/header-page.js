$('.js-cart').click(function(e) {
    $(this).addClass('active');
    var cartdrop = $('.cart-dropdown');

    if ($('.js-name-profile').hasClass('active')) {
        $('.js-name-profile').removeClass('active');
        $('.box-profile__dropdown').hide(300);
    }

    if (cartdrop.css('display') != 'block') {
        cartdrop.show(300);


        var firstClickCart = true;
        $(document).bind('click.myEventCart', function(e) {
            if (!firstClickCart && $(e.target).closest('.cart-dropdown').length == 0) {
                cartdrop.hide(300);
                $('.js-cart').removeClass('active');
                $(document).unbind('click.myEventCart');
            }

            firstClickCart = false;
        });
    }

    e.preventDefault();
});



$('.js-name-profile').click(function(i) {
    $(this).addClass('active');
    var nameProfile = $('.box-profile__dropdown');

    if ($('.js-cart').hasClass('active')) {
        $('.js-cart').removeClass('active');
        $('.cart-dropdown').hide(300);
    }

    if (nameProfile.css('display') != 'block') {
        nameProfile.show(300);


        var firstClickProf = true;
        $(document).bind('click.myEventNameProf', function(i) {
            if (!firstClickProf && $(i.target).closest('.box-profile__dropdown').length == 0) {
                nameProfile.hide(300);
                $('.js-name-profile').removeClass('active');
                $(document).unbind('click.myEventNameProf');
            }

            firstClickProf = false;
        });
    }

    i.preventDefault();
});



// $('.hamburger').click(function(e) {
//     var $message3 = $('ul.menu-lk');

//     if ($message3.css('transform') != 'translate(-100vw, 0px') {
//         $message3.css('transform', 'translate(0, 0px');
//         $(this).addClass('on-act');

//         var firstClick3 = true;
//         $(document).bind('click.myEvent', function(e) {
//             if (!firstClick3 && $(e.target).closest('.box-profile__dropdown').length == 0) {
//                 $message3.css('transform', 'translate(-100vw, 0px');
//                 $('.hamburger').removeClass('on-act');
//                 $(document).unbind('click.myEvent');
//             }
//             firstClick3 = false;
//         });
//     }

//     e.preventDefault();
// });

$('.hamburger').click(function() {
    $(this).toggleClass('on-act');
    if ($(this).hasClass('on-act')) {
        $(this).addClass('on-act');
        $('ul.menu-lk').addClass('on-act');
        $('body').addClass('noscroll');
        $('.ov-block').addClass('active');
    } else {
        $(this).removeClass('on-act');
        $('ul.menu-lk').removeClass('on-act');
        $('body').removeClass('noscroll');
        $('.ov-block').removeClass('active');
    }
});


// let nameProfile = document.querySelector('.js-name-profile');
// let profileDropdown = document.querySelector('.box-profile__dropdown');

// const toggleMenu2 = () => {
//     profileDropdown.classList.toggle('active');
// }

// nameProfile.addEventListener('click', e => {
//     e.stopPropagation();

//     toggleMenu2();
// });

// document.addEventListener('click', e => {
//     let target2 = e.target2;
//     let its_menu2 = target2 == profileDropdown || profileDropdown.contains(target2);
//     let its_hamburger2 = target2 == nameProfile;
//     let menu_is_active2 = profileDropdown.classList.contains('active');

//     if (!its_menu2 && !its_hamburger2 && menu_is_active2) {
//         toggleMenu2();
//     }
// });



$(document).mouseup(function(i) {
    var containerMenu = $('.menu-lk');
    if (containerMenu.has(i.target).length === 0) {
        $('.menu-lk').removeClass('on-act');
        $('.hamburger').removeClass('on-act');
        $('body').removeClass('noscroll');
        $('.ov-block').removeClass('active');
    }
});







$(document).ready(function() {

    // only small screens
    if ($(window).width() <= 600) {
        // show menu on swipe to right
        $(document).on('swiperight', function(e) {
            e.preventDefault();
            $('.menu-lk').animate({
                transform: 'translate(0, 0)'
            });
        });  // hide menu on swipe to left
        $(document).on('swipeleft', function(e) {
            e.preventDefault();
            $('.menu-lk').animate({
                transform: 'translate(-100vw, 0px)'
            });
        });
    }

});