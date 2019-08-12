var tabsHeader = $(".section__tabs .section__tabs--header ol");
var tabsContent = $(".section__tabs .section__tabs--container");

var activeClassName = "active";
var tabsHeaderChild = "li";
var tabsContentChild = ".single-tab";

var pageHeaderHeight = $(".page-header").outerHeight();

tabsHeader.find(tabsHeaderChild).click(function(){
    removeCurrentClass(activeClassName, tabsHeader, tabsHeaderChild);
    currentTab = getCurrentTab($(this));
    $(this).addClass(activeClassName);
    classNameOfTab = "." + currentTab;
    removeCurrentClass(activeClassName, tabsContent, tabsContentChild);
    tabsContent.find(classNameOfTab).addClass(activeClassName);
});

function removeCurrentClass(className, container, child){
    container.find(child).removeClass(className);
}

function getCurrentTab(tab){
    if(tab.hasClass(activeClassName)){
        tab.removeClass(activeClassName);
    }
    return tab.attr('class');
}

$('.home-button').click(function () { scrollToElement('body'); });
$('.portfolio-button').click(function () { scrollToElement('.section__portfolio'); });
$('.contact-button').click(function () { scrollToElement('.section__contact_us'); });
$('.team-button').click(function () { scrollToElement('.section__team'); });
$('.more-button').click(function () { scrollToElement('.section__about-us'); });
$('.pricelist-button').click(function () { scrollToElement('.section__pracing'); });

function scrollToElement(sectionClass){
    toggleNav('1');
    position = $(sectionClass).position();
    $.scrollTo(position.top - pageHeaderHeight, 500);
}

$(".section__pracing--buttons > .btn").click(function(){
    $(".section__pracing--buttons").find(".btn").removeClass("active");
    $(this).addClass("active");
    currentTab = $(this).attr('id');
    $(".section__pracing--inner").fadeOut();
    $(".section__pracing--inner#" + currentTab).fadeIn();
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
        $(".messenger__button").addClass("show");
    } else {
        $(".messenger__button").removeClass("show");
    }
});

$(window).scroll(function() {
    showElement("show", ".messenger__button");
    showElement("sticky", ".page-header");
});

$(document).ready(function(){
    showElement("show", ".messenger__button");
    showElement("sticky", ".page-header");
});

function showElement(stickyClass, element) {
    if ($(document).scrollTop() > 200) {
        $(element).addClass(stickyClass);
    } else {
        $(element).removeClass(stickyClass);
    }
}