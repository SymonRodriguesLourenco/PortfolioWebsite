$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop()>800){
            $('nav').addClass('black');
        }else{
            $('nav').removeClass('black');
        }
    })
})