const webpack=require("webpack");
const path =require("path");

module.exports ={
    //root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code
    entry:'./public/js/index.js',
    //output that bundled code a folder that we specify. 
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'main.bundle.js'
    },
    plugin:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        }),
    ],
    mode:"development"
};
