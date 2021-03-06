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

function HideSidebar() {
    var url = window.location.href
    if ($(window).width() < screen.width * 0.73) {
        $(".side").hide()
        //overwrite css for page padding
        if ($('#siteTable').length) {
            $('#siteTable').attr('style', 'margin-right: 10px !important;')
        }
        if (($('.content').length)) {
            $('.content').attr('style', 'margin-right: 10px !important;')
        }
        //siteTable_t3_495ki6
        if (($('#siteTable_t3_495ki6').length)) {
            $('#siteTable_t3_495ki6').attr('style', 'margin-right: 10px !important;')
        }
        if($('.sitetable.nestedlisting').length) {
            $('.sitetable.nestedlisting').attr('style', 'margin-right: 10px !important;')
        }
        if ($('.commentarea').length) {
            $('.commentarea').attr('style', 'margin-right: 10px !important;')
        }
        if (url.match("/r/fantasyfootball") || url.match("/r/movies")) {
            $('.logout.hover').hide()
        }
        if (url.match("/r/baseball")) {
            $('.link').attr('style', 'margin-right: 10px !important;')
        }

        if (url.match("/r/explainlikeimfive")) {
            $('.thing').attr('style', 'margin-right: 10px !important;')
        }
        if (url.match("r/iama") || url.match("r/IAmA")) {
            $('.thing').attr('style', 'margin-right: 10px !important;')
            if ($('.panestack-title').length) {
                $('.panestack-title').attr('style', 'margin-right: 10px !important;')
            }
            if ($('.menuarea').length) {
                $('.menuarea').attr('style', 'margin-right: 10px !important;')
            }
            if ($('.usertext.cloneable').length) {
                $('.usertext.cloneable').attr('style', 'margin-right: 10px !important;')
            }

        }
        if (url.match("/r/leagueoflegends")) {
            $('.content').css('width', 'auto')
        }
    }
    else {
        $(".side").show()
        //undo css overwrite
        if ($('#siteTable').length) {
            $('#siteTable').attr('style', '')
        }
        //css for content on some subreddits
        if (($('.content').length)) {
            $('.content').attr('style', '')
        }
        if (($('#siteTable_t3_495ki6').length)) {
            $('#siteTable_t3_495ki6').attr('style', '')
        }
        if($('.sitetable.nestedlisting').length) {
            $('.sitetable.nestedlisting').attr('style', '')
        }
        if ($('.commentarea').length) {
            $('.commentarea').attr('style', '')
        }
        if (url.match("/r/fantasyfootball") || url.match("/r/movies")) {
            $('.logout.hover').show()
        }
        if (url.match("/r/baseball")) {
            $('.link').attr('style', '')
        }
        if (url.match("/r/explainlikeimfive")) {
            $('.thing').attr('style', '')
        }
        if (url.match("/r/leagueoflegends")) {
            $('.content').css('width', '')
        }
        if (url.match("r/iama") || url.match("r/IAmA")) {
            $('.thing').attr('style', '')
            if ($('.panestack-title').length) {
                $('.panestack-title').attr('style', '')
            }
            if ($('.menuarea').length) {
                $('.menuarea').attr('style', '')
            }
            if ($('.usertext.cloneable').length) {
                $('.usertext.cloneable').attr('style', '')
            }
        }
    }
}
