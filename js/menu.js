var tabs=document.querySelectorAll("[data-click=tab]");
var index=10;
for(var tab of tabs){
    tab.onclick=function(){
        var tab=this;
        var id=tab.getAttribute("data-id");
        var div=document.getElementById(id);
        div.style.zIndex=index++;
    }
}