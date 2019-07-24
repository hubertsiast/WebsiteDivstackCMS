var tabsHeader = $(".section__tabs .section__tabs--header ol");
var tabsContent = $(".section__tabs .section__tabs--container");

var activeClassName = "active";
var tabsHeaderChild = "li";
var tabsContentChild = ".single-tab";

tabsHeader.find(tabsHeaderChild).click(function(){
    removeCurrentClass(activeClassName, tabsHeader, tabsHeaderChild);
    var currentTab = getCurrentTab($(this));
    $(this).addClass(activeClassName);
    var classNameOfTab = "." + currentTab;
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

$('.home-button').click(function () {
    $.scrollTo($('body'), 500);
});

$('.team-button').click(function () {
    $pos = $('.section__team').position();
    $.scrollTo($pos.top - 88, 500);
});

$('.portfolio-button').click(function () {
    $pos = $('.section__portfolio').position();
    $.scrollTo($pos.top - 88, 500);
});

$('.contact-button').click(function () {
    $pos = $('.section__contact_us').position();
    $.scrollTo($pos.top - 88, 500);
});

$('.more-button').click(function () {
    $pos = $('.section__about-us').position();
    $.scrollTo($pos.top - 88, 500);
});