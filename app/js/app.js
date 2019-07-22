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