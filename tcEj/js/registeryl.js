$(function(){
    panduan("#phone",/^\d{11}$/);
    panduan("#pwd",/^\w{8,20}$/);
    panduan("#email",/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    function panduan(obj,reg1){
        $(obj).blur(function(){
            var pValue = $(this).val();
            var reg = reg1;
            if(reg.test(pValue)){
                $(this).parent().siblings(".tip").css('display', 'none');
            }else{
                $(this).parent().siblings('.tip').css('display', 'inline-block');
            }
        })
    }
    $("#pwd1").blur(function(){
        var miVal = $(this).val();
        var miVal1 = $("#pwd").val();
        if(miVal){
            if(miVal==miVal1){


                $(this).parent().siblings(".tip").css("display","none")


            }else{
                $(this).parent().siblings('.tip').css('display', 'inline-block');
                return false;
            }
        }else{
            $(this).parent().siblings(".tip").css('display', 'none');
        }
    })
    $('#send').click(function() {
        var email = $("#email").val();
        if(email != "" && $('.tip').css('display')=='none'){
           var user = $("#phone").val();
           var pwd = $("#pwd").val();
           localStorage.setItem("user",user);
           localStorage.setItem("pwd",pwd);
            window.location = "deng.html";
        }else{
            alert("Please complete the information!")
        }
    })



//     sessionStorage.getItem(key):获取指定key本地存储的值
// sessionStorage.setItem(key,value)：将value存储到key字段
// sessionStorage.removeItem(key):删除指定key本地存储的值
// sessionStorage.length是sessionStorage的项目数

})