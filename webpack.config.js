const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'main.js',
    },
    module:{ //
        rules:[ //配列　オプションa,b,c
            {
                test:/\.css/, //オプションの構造　フィル名を検知　//で囲んで指定　.cssのファイルを検知
                use:[//検知した物にルールを適用　~というloaderを使ってね♥という意味
                    {
                        loader:'style-loader'//ローダは下から適用される
                    },
                    {
                        loader:'css-loader',
                    },
                ],
            },
        ],
    },

}
