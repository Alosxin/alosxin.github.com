$(function () {
    //    头部内容
    $(".my-header-nav").hover(function () {
        $(".my-header").css("border-bottom","1px solid #cccccc")
    })

    var eWidth = $(".row").outerWidth();
    $(".my-header-nav img").css({width:eWidth});
    $(".my-show-left img").css({"max-width":eWidth-234})

    $(".my-header-search input").focus(function () {
        $(this).css({
            outline:"none",
            border:"1px solid #ff6700"
        })
        $(".my-header-search span").css({
            border:"1px solid #ff6700"
        })
        $(".my-header-search>div").css({
            display:"none"
        })
    })
    $(".my-header-search input").blur(function () {
        $(this).css({
            border:"1px solid rgb(224, 224, 224)"
        })
        $(".my-header-search span").css({
            border:"1px solid rgb(224, 224, 224)"
        })
        $(".my-header-search>div").css({
            display:"block"
        })
    })

//        小米明星单品
    setInterval(function () {
        if (swiper.realIndex==1){
            $(".swiper-button-prev").addClass("activeIndex")
            $(".swiper-button-next").removeClass("activeIndex")

        }else {
            $(".swiper-button-next").addClass("activeIndex")
            $(".swiper-button-prev").removeClass("activeIndex")
        }
    },500)

//        产品
//        家电
    $(".tab-active").addClass("style")
    $(".my-Appliances-title>ul>li").hover(function () {
        $(this).addClass("style");
        $(this).siblings().removeClass("style");
        $(this).children().css({display:'block'});
        $(this).siblings().children().css({display:'none'});
    });

    $(".Appliances-content-left>img").hover(function () {
        $(this).stop().animate({marginTop:"-3px"},300)
        $(this).css("box-shadow","0 5px 10px #aeaeae")
    },function () {
        $(this).stop().animate({marginTop:"0"},300)
        $(this).css("box-shadow","none")
    });

    $(".Appliances-content-right>ul>li").hover(function () {
        $(this).stop().animate({top:"-3px"},300);
        $(this).css("box-shadow","0 0 10px #aeaeae");
    },function () {
        $(this).stop().animate({top:"0px"},300);
        $(this).css("box-shadow","none");
    })

    $(".Appliances-content-right>ul>li>div").hover(function () {
        $(this).children("div").stop().animate({top:"220px"},300);
    },function () {
        $(this).children("div").stop().animate({top:"300px"},300);
    })

    $(".more>div").hover(function () {
        $(this).stop().animate({top:"-3px"},300);
        $(this).css("box-shadow","0 0 10px #aeaeae");
    },function () {
        $(this).stop().animate({top:"0px"},300);
        $(this).css("box-shadow","none");
    })
// 热门商品
    $(".up-shadow").hover(function () {
        $(this).stop().animate({top:"-3px"},300);
        $(this).css("box-shadow","0 0 10px #aeaeae");
    },function () {
        $(this).stop().animate({top:"0px"},300);
        $(this).css("box-shadow","none");
    })
    // 内容
    $("#contentRight1").click(function () {
        if($("#siteContentMove1").is(":animated")){
            return;
        }
        $left = parseInt($("#siteContentMove1").css("left"));
        if($left>-570){
            $left = $left-285;
            $("#siteContentMove1").animate({
                left:$left
            },600)
            if($left==0){
                $(".content-page span").eq(0).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else if($left==-285){
                $(".content-page span").eq(1).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else{
                $(".content-page span").eq(2).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})}
        }
    })
    $("#contentLeft1").click(function () {
        if($("#siteContentMove1").is(":animated")){
            return;
        }
        $left = parseInt($("#siteContentMove1").css("left"));
        console.log($left)
        if($left<0){
            $left = $left+285;
            $("#siteContentMove1").animate({
                left:$left
            },600)
            if($left==0){
                $(".content-page span").eq(0).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else if($left==-285){
                $(".content-page span").eq(1).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else{
                $(".content-page span").eq(2).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})}
        }
    })

    $("#contentRight2").click(function () {
        if($("#siteContentMove2").is(":animated")){
            return;
        }
        $left = parseInt($("#siteContentMove2").css("left"));
        if($left>-570){
            $left = $left-285;
            $("#siteContentMove2").animate({
                left:$left
            },600)
            if($left==0){
                $(".content-page span").eq(3).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else if($left==-285){
                $(".content-page span").eq(4).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else{
                $(".content-page span").eq(5).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})}
        }
    })
    $("#contentLeft2").click(function () {
        if($("#siteContentMove2").is(":animated")){
            return;
        }
        $left = parseInt($("#siteContentMove2").css("left"));
        console.log($left)
        if($left<0){
            $left = $left+285;
            $("#siteContentMove2").animate({
                left:$left
            },600)
            if($left==0){
                $(".content-page span").eq(3).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else if($left==-285){
                $(".content-page span").eq(4).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else{
                $(".content-page span").eq(5).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})}
        }
    })

    $("#contentRight3").click(function () {
        if($("#siteContentMove3").is(":animated")){
            return;
        }
        $left = parseInt($("#siteContentMove3").css("left"));
        if($left>-570){
            $left = $left-285;
            $("#siteContentMove3").animate({
                left:$left
            },600)
            if($left==0){
                $(".content-page span").eq(6).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else if($left==-285){
                $(".content-page span").eq(7).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else{
                $(".content-page span").eq(8).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})}
        }
    })
    $("#contentLeft3").click(function () {
        if($("#siteContentMove3").is(":animated")){
            return;
        }
        $left = parseInt($("#siteContentMove3").css("left"));
        console.log($left)
        if($left<0){
            $left = $left+285;
            $("#siteContentMove3").animate({
                left:$left
            },600)
            if($left==0){
                $(".content-page span").eq(6).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else if($left==-285){
                $(".content-page span").eq(7).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else{
                $(".content-page span").eq(8).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})}
        }
    })

    $("#contentRight4").click(function () {
        if($("#siteContentMove4").is(":animated")){
            return;
        }
        $left = parseInt($("#siteContentMove4").css("left"));
        if($left>-570){
            $left = $left-285;
            $("#siteContentMove4").animate({
                left:$left
            },600)
            if($left==0){
                $(".content-page span").eq(9).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else if($left==-285){
                $(".content-page span").eq(10).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else{
                $(".content-page span").eq(11).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})}
        }
    })
    $("#contentLeft4").click(function () {
        if($("#siteContentMove4").is(":animated")){
            return;
        }
        $left = parseInt($("#siteContentMove4").css("left"));
        console.log($left)
        if($left<0){
            $left = $left+285;
            $("#siteContentMove4").animate({
                left:$left
            },600)
            if($left==0){
                $(".content-page span").eq(9).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else if($left==-285){
                $(".content-page span").eq(10).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})
            }else{
                $(".content-page span").eq(11).css({backgroundColor:"red"}).siblings().css({backgroundColor:"gray"})}
        }
    })
// 轮播
    $('#myCarousel').carousel({
        interval: 5000
    });

    $('#myCarouselB').carousel({
        interval: 5000
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        autoplayDisableOnInteraction : false,
        spaceBetween: 30,
        loop: true,
        autoplay:3000
    });
})