$(function(){
    $("#login").click(function(event) {

        var phoneval = $("#login-phone").val();
        var pwdval = $("#login-pwd").val();
        console.log(phoneval);
        if(phoneval==localStorage.getItem("user")&&pwdval==localStorage.getItem("pwd")){
            window.location="adminsll.html";
        }else{
            alert('账号密码错误请重新输入 ！')
        }

    });
})