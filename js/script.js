$(document).ready(function(){

    $("nav>ul>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(this).find(".sub").stop().slideUp();
    });


    $("header > div > ul > li:first-child").hover(function(){
        $(".my-sub").stop().slideDown();
    }, function(){
        $(".my-sub").stop().slideUp();
    })


    $('.trigger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });


    $(window).scroll(function(){
        var top = $(this).scrollTop();

        if(top>=500) {
            $('.scrollButtonBox').css('display', 'block');
        } else {
            $('.scrollButtonBox').css('display', 'none');

        }
    });


    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop:0},1000);
        return false;
    });





});


