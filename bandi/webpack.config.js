/**
 * Created by soul on 2016/3/22.
 */
const webpack=require("webpack");

module.exports={
    entry:"./dev/output.js",
    externals:{
        "jquery" : "jQuery",
        "Vue":"Vue"
    },
    output:{
        filename:"main.js"
    },
    module:{
        loaders:[
            {test:/\.vue$/,loader:"vue-loader"},
            {test:/\.js$/,loader:"babel-loader",exclude: /node_modules/},
        ],
    },
    vue:{
        loaders:{
            js:"babel"
        }
    }
};


