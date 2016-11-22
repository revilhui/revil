/**
 * Created by Administrator on 2015/12/14.
 */
$(function(){
    //移动适配
    $(".header .nav button").bind("click",function(){
        var isShow = $(this).attr("data-isshow");
        if(isShow == "false"){
            $(".header .nav .loginbar,.header .nav ul").addClass("show");
            $(this).attr("data-isshow","true");
        }else{
            $(".header .nav .loginbar,.header .nav ul").removeClass("show");
            $(this).attr("data-isshow","false");
        }
    });
    //导航 更多
    $(".header .nav ul li.more").bind("click",function(){
        $(this).find("div").toggle();
    })
})