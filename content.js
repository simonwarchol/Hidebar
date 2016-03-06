// Reddit-HideBar
// Simon Warchol
// 5 March 2016
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
        //overwrite css for page padding
        if($('#siteTable').length){
        	$('#siteTable').attr('style', 'margin-right: 10px !important;')
    	}
        if (($('.content').length)){
            $('.content').attr('style', 'margin-right: 10px !important;')
        }
    }
    else{
        $(".side").show()
        //undo css overwrite
        if($('#siteTable').length){
        	$('#siteTable').attr('style', '')
    	}
        //css for content on some subreddits
        if (($('.content').length)){
            $('.content').attr('style', '')
        }
    }
}