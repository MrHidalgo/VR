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
   $(this).slideUp('1500');
});
