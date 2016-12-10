function init(){
    $.get("job.json",function(data){
    var attr =[];
    var attr1 =[];
    for(var key in data){
        attr.push(data[key]);
        attr1.push(data[key].joblist)
    }
    var obj ={list:attr}
   var html = template('tab',obj);
   $('.tablist').html(html);
   var html1=''
   for(var i=0 ; i<attr1.length ; i++){
        var obj1 = {list1:attr1[i]};
       html1 +=template('datil',obj1);
   }
   $('.tabox').html(html1);
   $('.tablist>li').eq(0).addClass('hover');
   $('.jobdatail').eq(0).addClass('active');
   $('.tablist>li').click(function(){
    $(this).addClass('hover').siblings().removeClass('hover');
    $('.jobdatail').eq($(this).index()).addClass('active').siblings().removeClass('active')
   });
   $('.jobdatail>li').click(function(){
        var id = $(this).attr('dataid');
        window.open('datils.html?id='+id);
   })
});


}
init();

