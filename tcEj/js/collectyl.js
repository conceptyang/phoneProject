$(function(){
    $("#footer").load("pagefooter.html",function() {
        $(".paging").click(function(){$(this).siblings().css("color","#a1a1a2"),$(this).css("color","skyblue")});
    });
})