var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(tabcon of tabcontents){
    tabcon.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}
document.addEventListener("DOMContentLoaded", function() {
var side=document.getElementById("u");
function openmenu(){
    side.style.right="0px";
}
function closemenu(){
    side.style.right="-200px";
    
}
});
