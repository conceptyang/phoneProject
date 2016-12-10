$(function(){
    if (localStorage.getItem("user")&&localStorage.getItem("pwd")) {
        var name = localStorage.getItem("user");
        $(".btn").css('display', 'none');
        $(".user-btn").css('display', 'block');
        $("#user-name").html(name);
        $("#logout").click(function(){
         localStorage.removeItem("user");
         localStorage.removeItem("pwd");
         window.location="adminsll.html";
        });
    }else{
         $(".btn").css('display', 'block');
        $(".user-btn").css('display', 'none');
        $("#user-name").html('');
    };


});