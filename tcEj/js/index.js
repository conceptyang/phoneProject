$("#footer").load("pagefooter.html",function(){new Swiper(".swiper-container",{loop:!0,pagination:".swiper-pagination",paginationClickable:!0,autoplay:2e3});
    $(".paging").click(function(){$(this).siblings().css("color","#a1a1a2"),$(this).css("color","skyblue"),console.log($(this))})
});