//全屏滚动
$(function(){
    $('#fullPage').fullpage();
});
//显示模式切换
$(document).ready(function (){
    $("#a_svg_1").click(function (){
        $("#a_svg_1").fadeOut(1000);
        $("#a_svg_0").delay(1000).fadeIn(1000);
    });
    $("#a_svg_0").click(function (){
        $("#a_svg_0").fadeOut(1000);
        $("#a_svg_1").delay(1000).fadeIn(1000);
    });
    $(".menu_a").click(function () {
        $(".top_menu_right").toggleClass("open");
        $(".menu_hidden").delay(50).toggle(250);
    })
});
