var hamburger = $(".hamburger");
var nav = $(".page-nav");
var header = $(".page-header");

var stickyClass = "sticky";

hamburger.click(function(){
    $('html, body').toggleClass('scroll--lock');
    $(this).toggleClass("is-active");
    nav.toggleClass("is-open");    
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        header.addClass(stickyClass);
    } else {
        header.removeClass(stickyClass);
    }
});