/*
* BTN HIDE LEFT MENU
*/
$('.hide-left-menu').click(function () {
    $('.navbar-brand').toggleClass('slide-left').animate({
        transition: '.5s'
    });
    $('.brand-logo').toggle('slow');
    $('.icon-arrow-left').toggleClass('icon-arrow-right').animate({
        transition: '.5s'
    });
});