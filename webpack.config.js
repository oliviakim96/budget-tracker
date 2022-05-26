const webpack=require("webpack");
const path =require("path");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports ={
    //root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code
    entry:'./public/js/index.js',
    //output that bundled code a folder that we specify. 
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'main.bundle.js'
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        }),
        new WebpackPwaManifest({
            name:"budget-tracker",
            short_name:"budget",
            theme_color: "#ffffff",
            background_color:"#01579b",
            start_url:"../index.html",
            display:"standalone"
        })
    ],
    mode:"development"
};
