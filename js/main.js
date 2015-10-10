/*
*============================================
* SCREENSAVER PAGE REPLACE PROFILE PAGE
*============================================
*/
$('#screen').click(function(){
    $('#profile').css(
        'display' , 'block'
    ).animate({
        opacity: '1'
    }, 1500);
   $(this).slideUp('2000');
});



/*
 *============================================
 * PROFILE PAGE LOAD CONTENT PAGE
 *============================================
 */
$('#profile').click(function(){
   window.location.href ='index-content.html';
});



/*
 *============================================
 * CONTENT PAGE LOAD SCREEN
 *============================================
 */
$('.navbar-brand').click(function(){
    window.location.href ='index.html';
});



/*
 *============================================
 * SLIDE LEFT/RIGHT MENU
 *============================================
 */
$('.arrow-swap, .arrow-swap').click(function(){
    $('.navbar-brand, .site-menubar').toggleClass('slide-left-menu').animate({
        transition: '.5s'
    });
    $('.navbar-brand-text').toggleClass('hide-menubar');
    $('.txt-link').toggleClass('txt-link-hide');
    $('.navbar-container').toggleClass('left-side-container').animate({
        transition: '.5s'
    });
    $('.icon-arrow').toggleClass('icon-arrow-rotate').animate({
        transition: '.5s'
    });
    $('.arrow-swap').toggleClass('btn-left').animate({
        transition: '.5s'
    });
    $('.content-page').toggleClass('content-slide').animate({
        transition: '.5s'
    });
});

$('.toggle-hide-left').click(function() {
   $('.navbar-brand, .site-menubar').addClass('slide-left-menu');
   $('.navbar-brand-text').addClass('hide-menubar');
   $('.txt-link').addClass('txt-link-hide');
   $('.navbar-container').addClass('left-side-container');
   $('.icon-arrow').addClass('icon-arrow-rotate');
   $('.arrow-swap').addClass('btn-left');
   $('.content-page').addClass('content-slide');
});



/*
 *============================================
 * BTN ACTIVE LEFT MENU
 *============================================
 */
$(".btn-left-menu").click(function(){
    $(".btn-left-menu").removeClass("active");
    $(this).addClass("active")
});