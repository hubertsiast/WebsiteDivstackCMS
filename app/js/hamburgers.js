var hamburger = $(".hamburger");
var nav = $(".page-nav");

hamburger.click(function(){
    $(this).toggleClass("is-active");
    nav.toggleClass("is-open");
});