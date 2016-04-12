var Hover = (elem, func)=>
    function (event, ...data) {
            if (screen.width <= 600) {
                    return false
            }
            let $target = $(event.target);
            let offset = $target.position();
            $(elem).width($target.width());
            $(elem).height($target.height());
            $(elem).css({top: offset.top, left: offset.left});
            $(elem).show();
            func.call(this, data);
    };


export{Hover} ;