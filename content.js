// Reddit-HideBar
// Simon Warchol
// 3 March 2016
// Hides the reddit sidebar when the window width is less than 73% of 
// screen width

'use strict';
HideSidebar();
window.addEventListener('resize', function resized(e) {
    HideSidebar()
}, false);

function HideSidebar(){
    if($(window).width() < screen.width * 0.73){
        $(".side").hide()
    }
    else{
        $(".side").show()

    }
}