/**
 * Created by soul on 2016/3/22.
 */

const $=require("jquery");

class Nav{
    constructor(elem){
        this.navElem=$(elem.navElem);
        this.setLocationNav(elem.locationElem);
        this.bindEvents();
    }
    setLocationNav(locationElem){
        this.LocationElem=[];
        locationElem.forEach((e,i)=>{
            this.LocationElem.push({top:this.getTop(e),name:e,height:$(e).height()});
        });
    }
    getTop(elem){
        return $(elem).position().top;
    }
    bindEvents(){
        this.navElem.on("click","a",(e)=>{
            let index=this.navElem.find("li").index($(e.target).parent("li"));
            this.goLocation(index);
            return false
        });
        $(window).on("scroll",(e)=>{
            let windowTop=$(window).scrollTop();
            if(windowTop>=120){
                if(this.navElem.attr("class").indexOf("float-nav")<=-1){
                    this.navElem.addClass("float-nav");
                }
                let index=this.windowTopIndex(windowTop);
                this.setNavClass(index);
            }else{
                $(this.navElem).find(".nav-list").show();
                this.navElem.removeClass("float-nav");
            }
        })
    }
    setNavClass(index){
        this.navElem.find("li").siblings().removeClass("nav-current");
        this.navElem.find("li").eq(index).addClass("nav-current")
    }
    goLocation(index){
        //$(window).scrollTop(1000)
        $("html,body").stop().animate({
            scrollTop:this.LocationElem[index].top
        },500)
        return false
    }
    windowTopIndex(scroll){
        let _index;
        for(let i=0;i<=this.LocationElem.length;i++){
            let e=this.LocationElem[i];
            if(scroll+20<=e.top+e.height){
                _index=i;
                break
            }
        }
        return _index
    }
}

let nav=new Nav({
    navElem:"nav",
    locationElem:["header",".second-screen",".fourth-screen",".fifth-screen",".sixth-screen",".seventh-screen",".eighth-screen"]
});

$(".open-btn").on("click",(()=>{
    let isopen=true;
    return ()=>{
        if(isopen){
            $(".nav-list").show(500);
            isopen=!isopen
        }else{
            $(".nav-list").hide(500);
            isopen=!isopen
        }
    };

})());



