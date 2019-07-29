var hamburger = $(".hamburger");
var nav = $(".page-nav");
var header = $(".page-header");

var stickyClass = "sticky";

hamburger.click(function(){
    toggleNav();
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
        header.addClass(stickyClass);
    } else {
        header.removeClass(stickyClass);
    }
});

function toggleNav(state){
    toggleScrollBar('1');
    if(state == '1'){
        hamburger.removeClass("is-active");
        nav.removeClass("is-open");   
    }else{
        hamburger.toggleClass("is-active");
        nav.toggleClass("is-open");
    }   
}

function toggleScrollBar(state){
    if(state == '1')
        $('html, body').removeClass('scroll--lock');
    else
        $('html, body').toggleClass('scroll--lock');
}

function hideHeader(){
    header.removeClass(stickyClass);
}