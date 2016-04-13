var Hover = (elem, func,width=0,height=0)=>
    function (event, ...data) {
            if (screen.width <= 600) {
                    return false
            }
            event.stopImmediatePropagation();
        //console.log(elem,func,width,height)
            let $target = $(event.target);
            let offset = $target.position();
            $(elem).width($target.width()+width);
            $(elem).height($target.height()+height);
            $(elem).css({top: offset.top, left: offset.left});
            $(elem).show();
            func.call(this, data);
            return false
    };

export{Hover} ;