/**
 * Created by soul on 2016/3/22.
 */
const webpack=require("webpack");

module.exports={
    entry:"./dev/devjs.js",
    externals:{
        "jquery" : "jQuery",
    },
    output:{
        filename:"main.js"
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:"babel?presets[]=react,presets[]=es2015"}
        ]
    }

}