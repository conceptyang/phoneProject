$(function(){
    $("#footer").load("pagefooter.html",function() {
        //底部颜色改变
        $(".paging").click(function(){$(this).siblings().css("color","#a1a1a2"),$(this).css("color","skyblue")});

        //获取localstorage
        var arr=[];
        var s = JSON.parse(localStorage.getItem("id"));
        if(localStorage.getItem("id")){
            if (localStorage.getItem("id")=='[]') {
                $('nothing').css('display', 'block');
                $('something').css('display', 'none');
            }else{
                $.get("js/datils.json",function(data1){
            for(var key in data1){
                for(var i = 0 ; i<s.length;i++){
                    if(s[i]==key){
                        arr.push(data1[key]);
                     }
                }
            }
            var prodlistData ={
                list :arr
            };
            var html = template("hh",prodlistData);
            $("#collect-cont").html(html);    //渲染页面
            $(".something").css('display', 'block');
            $(".nothing").css('display', 'none');
            $(".cont-bot").click(function(){   //删除cookie
                var id = $(this).attr("id");
                var s = JSON.parse(localStorage.getItem("id"));
                $.each(s, function(key,value) {
                    if(value == id){
                        s.splice(key,1);
                        var str = JSON.stringify(s);
                        localStorage.setItem("id",str);
                        window.location.reload();

                    }
                });
            });
        })
            }


    }
    });
})