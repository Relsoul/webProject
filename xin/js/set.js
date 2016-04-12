/**
 * Created by soul on 2016/4/9.
 */
/*
*
* [left,top]
* */

$(function(){

    //Menu菜单事件
    function Menu(elem){
        this.wrapElem=$(elem);
        this.btnElem=$(this.wrapElem).find(".menu-btn");
        this.contentElem=$(this.wrapElem).find(".menu-content");
        this.listElem=$(this.wrapElem).find(".menu-list");
        this.listItemElem=$(this.listElem).find("li");
        this.init()
    }
    Menu.prototype={
        init:function(){
            this.bindEvents()
        },
        bindEvents:function(){
            var self=this;
            $(self.contentElem).attr("data-width",$(self.contentElem).width());
            setTimeout(function(){
                $(self.contentElem).width(0)
            },100)
            $(this.btnElem).on("click",function(e){
                e.stopImmediatePropagation();
                if($(self.contentElem).width()<10){
                    console.log($(self.contentElem).width());
                    $(self.contentElem).stop(true).animate({width:$(self.contentElem).attr("data-width")},800);
                }else{
                    $(self.contentElem).stop(true).animate({width:"0"},800);
                }
            });
            $(this.listItemElem).on("click",function(){
                var index=$(self.listItemElem).index(this);
                $.fn.fullpage.moveTo(index+1,0);
            })
        },
        setClass:function(index){
            $(this.listItemElem).siblings().removeClass("current");
            $(this.listItemElem).eq(index).addClass("current");
        }
    };

    //圆滚动
    var Roundrotate=(function(){
        var listItem= $(".round-nav").find("li");
        var $roundItem=$(".small-round");

        var rotate=function(index){
            $(listItem).siblings().removeClass("current");
            $(listItem).eq(index).addClass("current");
            $roundItem.velocity("stop").velocity({
                rotateZ:45*index
            },800)
        };

        listItem.on("click",function(){
            var index=$(listItem).index(this);
            rotate(index);
        });

    })();

    //底部点击鼠标图片向下滚动
    $(".mouse-down").on("click",function(e){
        $.fn.fullpage.moveSectionDown();
        e.stopImmediatePropagation()
    });

    var menu=new Menu("#menu");


    if($.browser.msie && $.browser.version < 10){
        $('body').addClass('ltie5');
    }
    $.fn.fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        navigationTooltips: ['', '', '', '', ''],
        afterLoad:function(anchorLink,index){
            menu.setClass(index-1);
            animateFunctions[index-1]();
            if(index==5){
                $(".mouse-down").hide()
            }else{ $(".mouse-down").show()}
        },
        onLeave:function(i){
            if(i===5){
                //最后一页添加消失
                /*$(".section5").find(".section5-content p").each(function(i,e){
                    $(e).css({opacity:0})
                })
                $(".section5").find(".contact li").each(function(i,e){
                    $(e).css({opacity:0})
                })*/

            }
        }
    });

    var animateFunctions=[];
    /*
    * 动画效果.velocity("finish") 回到最终状态.会产生一些不太自然的过渡效果 可以忽略
    * */
    animateFunctions[0]=function(){
        $(".section1").find(".logo-list li")
            .velocity("finish").velocity({width:"+=100px"},800)
            .velocity({width:"-=100px"},800)
    };

    animateFunctions[1]=(function(){
        var isDone=true;
        return function (){
           /* if(!isDone){
                return false
            }
            isDone=false;*/
            var content=$(".section2").find(".content");
            var $first=$(content).find(".first");
            var $second=$(content).find(".second");
            var $thrid=$(content).find(".third");
            $first.velocity("finish").velocity({
                opacity:0
            }).velocity({opacity:1},{duration:1000});
            $second.velocity("finish").velocity({
                opacity:0
            }).velocity({opacity:1},{duration:1000,delay:1000});
            $thrid.velocity("finish").velocity({
                opacity:0
            }).velocity({opacity:1},{duration:1000,delay:2000});
           /* setTimeout(function(){
                isDone=true
            },4500)*/
        }

    })();

    animateFunctions[2]=(function(){
        var isDone=true;
        return function (){
            /*if(!isDone){
                return false
            }
            isDone=false;*/
            var card=$(".section3").find(".card-list");
            var cardElem=$(card).find("li");
            $(cardElem).each(function(i,e){
                $(e).velocity("finish").velocity({top:"+=-1000*(i+1)"},800)
                    .velocity({top:"+=1000*(i+1)"},{duration:800,delay:(i+1)*100,easing:"easeInOut"})
            })
           /* setTimeout(function(){
                isDone=true
            },3000);*/
            //$(card).velocity({},{delay:5000},function(){isDone=true})
        }
    })();

    animateFunctions[3]=(function(){
        var isDone=true;
        return function (){
/*            if(!isDone){
                $(".section4").find(".small-round").velocity("finish");
                $(".section4").find(".round-nav li").each(function(i,e){
                    $(e).velocity("finish");
                });
                return false
            }
            isDone=false;*/
            var round=$(".section4").find(".small-round").velocity("finish").velocity({rotateZ:"+=360"},{duration:1300,easing:"easeInOut"})
                .velocity({rotateZ:"-=360"},1800);
            $(".section4").find(".round-nav li").each(function(i,e){
                $(e).velocity("finish").velocity({rotateZ:"+=360"},800)
                    .velocity({rotateZ:"-=360"},{duration:800,delay:(i+1)*300,easing:"easeInOut"})
            });
            /*setTimeout(function(){
                isDone=true
            },3500);*/
        };

    })();
    animateFunctions[4]=function(){
        $(".section5").find(".section5-content p").each(function(i,e){
            $(e).velocity("finish").velocity({opacity:0},1).velocity({opacity:1},{duration:800,delay:(i+1)*300,easing:"easeInOut"})
        })
        $(".section5").find(".contact li").each(function(i,e){
            $(e).velocity("finish").velocity({opacity:0},1).velocity({opacity:1},{duration:800,delay:(i+1)*300,easing:"easeInOut"})
        })
    };

    animateFunctions[0]();
    $(".mouse-down").velocity({top:"+=20px"},{loop:true,duration:1200})
});