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
 * SLIDE LEFT/RIGHT MENU
 *============================================
 */
$('.arrow-swap, .arrow-swap').click(function(){
    $('.navbar-brand').toggleClass('slide-left-menu').animate({
        transition: '.5s'
    });
    $('.navbar-brand-text').toggle('fast');
    $('.navbar-container').toggleClass('left-side-container').animate({
        transition: '.5s'
    });
    $('.icon-arrow').toggleClass('icon-arrow-rotate').animate({
        transition: '.5s'
    });
    $('.arrow-swap').toggleClass('btn-left').animate({
        transition: '.5s'
    });
});