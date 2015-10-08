$(document).ready(function(){

    //auto load order
    $.ajax({
        url: "content/index-order.html",
        cache: false,
        success: function(html){
            $("#content-page").html(html);
        }
    });

    /*
    * LOAD ORDER
    */
    $('.load-order').click(function(){
        $.ajax({
            url: "content/index-order.html",
            cache: false,
            success: function(html){
                $("#content-page").html(html);
            }
        });
    });

    /*
    * LOAD DOCUMENT
    */
    $('.load-document').click(function(){
        $.ajax({
            url: "content/index-document.html",
            cache: false,
            success: function(html){
                $("#content-page").html(html);
            }
        });
    });

    /*
    * LOAD VOTING
    */
    $('.load-voting').click(function(){
        $.ajax({
            url: "content/index-voting.html",
            cache: false,
            success: function(html){
                $("#content-page").html(html);
            }
        });
    });

    /*
     * LOAD USERS
     */
    $('.load-users').click(function(){
        $.ajax({
            url: "content/index-users.html",
            cache: false,
            success: function(html){
                $("#content-page").html(html);
            }
        });
    });

    /*
     * LOAD CHAT
     */
    $('.load-chat').click(function(){
        $.ajax({
            url: "content/index-chat.html",
            cache: false,
            success: function(html){
                $("#content-page").html(html);
            }
        });
    });

    /*
    * LOAD LIVE
    */
    $('.load-live').click(function(){
        $.ajax({
            url: "content/index-live.html",
            cache: false,
            success: function(html){
                $("#content-page").html(html);
            }
        });
    });

    /*
    * LOAD CALENDAR
    */
    $('.load-calendar').click(function(){
        $.ajax({
            url: "content/index-calendar.html",
            cache: false,
            success: function(html){
                $("#content-page").html(html);
            }
        });
    });

    /*
     * LOAD INFO
     */
    $('.load-info').click(function(){
        $.ajax({
            url: "content/index-info.html",
            cache: false,
            success: function(html){
                $("#content-page").html(html);
            }
        });
    });

    /*
     * LOAD LOW
     */
    $('.load-low').click(function(){
        $.ajax({
            url: "content/index-low.html",
            cache: false,
            success: function(html){
                $("#content-page").html(html);
            }
        });
    });
});