const path=require('path');

module.exports = {
    output : {
        filename : 'main-bundler.bundler.js'
    },
    module : {
        rules : {
            {
                test : /\.txt$/ ,
                use : 'raw-loader'
            }
        }
    }
}