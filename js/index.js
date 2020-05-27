$(document).ready(function () {
//载入头部
    $("#head").load("CommonDocument/head.html");
//载入尾部
    $("#bottom").load("CommonDocument/bottom.html");
//载入尾部2
    $("#bottom2").load("CommonDocument/bottom2.html")
//载入搜索框
    $("#search-box").load("CommonDocument/searchbox.html")
//修改点击背景色
    $(".hot-word .nav li").click(
        function ()
        {
            $(".hot-word .nav li a").css('background-color','transparent')
        })
    $(".top-nav .nav li").click(
        function () {
            $(".top-nav .nav li a").css('background-color','transparent')
        })

    $(".content-nav .side-nav .nav li").mouseenter(function () {
        $("#categoryhide").show()
    })
    $(".content-nav .side-nav .nav li").mouseleave(function () {
        $("#categoryhide").delay(2000).hide()
    })
    $("#categoryhide").mouseenter(function(){
        $("#categoryhide").show();
    })
    $("#categoryhide").mouseleave(function(){
        $("#categoryhide").delay(2000).hide();
    })
})



