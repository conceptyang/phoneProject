function init(){
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return unescape(r[2]);
        return null;
        }
        var goodid=(GetQueryString("id"));
        $.get('datils.json',function(data){
            for(var key in data){
                if(key==goodid){
                    var obj =data[key];
                     var html = template('add',{obj:obj});
                    $('.datils').html(html);
                     if(localStorage.getItem('id')){
                        $('.collection').css('color','red')
                    }
                    collection();
                    back();
                }
            }
        })
        function collection(){
        $('.collection').click(function(){
            if(localStorage.getItem('id')){
                    localStorage.removeItem("id");
                    $(this).css('color','black')
            }else{
                var value =[];
                value.push(goodid)
                value = JSON.stringify(value);
                localStorage.setItem('id',value);
                $(this).css('color','red');
            }

            })
        }
        function back(){
            $('.return').click(function(){
                window.open('indexwcx.html');
            })
        }
}
init();
