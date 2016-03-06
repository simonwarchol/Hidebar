// Hidebar
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
    var url = window.location.href
    if($(window).width() < screen.width * 0.73){
        $(".side").hide()
        //overwrite css for page padding
        if($('#siteTable').length){
        	$('#siteTable').attr('style', 'margin-right: 10px !important;')
    	}
        if (($('.content').length)){
            $('.content').attr('style', 'margin-right: 10px !important;')
        }
        //siteTable_t3_495ki6
        if (($('#siteTable_t3_495ki6').length)){
            $('#siteTable_t3_495ki6').attr('style', 'margin-right: 10px !important;')
        }
        if ($('.commentarea').length){
            $('.commentarea').attr('style', 'margin-right: 10px !important;')
        }
        if(url.match("/r/fantasyfootball") || url.match("/r/movies")){
            $('.logout.hover').hide()
        }
        if(url.match("/r/explainlikeimfive" || url.match("r/iama"))) {
            $('.thing').attr('style', 'margin-right: 10px !important;')
        }
        if(url.match("/r/leagueoflegends")) {
            $('.content').css('width', 'auto')
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
        if (($('#siteTable_t3_495ki6').length)){
            $('#siteTable_t3_495ki6').attr('style', '')
        }
        if ($('.commentarea').length){
            $('.commentarea').attr('style', '')
        }
        if(url.match("/r/fantasyfootball") || url.match("/r/movies")){
            $('.logout.hover').show()
        }
        if(url.match("/r/explainlikeimfive" || url.match("r/iama"))) {
            $('.thing').attr('style', '')
        }
        if(url.match("/r/leagueoflegends")) {
            $('.content').css('width', '')
        }
    }
}