const path = require('path');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//(にはいろいろツールがあるが、{}のみとってくる

module.exports = {
    entry:'./src/javascripts/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'javascripts/main.js',
    },
    module:{ //
        rules:[ //配列　オプションa,b,c
            {
                test:/\.css/, //オプションの構造　フィル名を検知　//で囲んで指定　.cssのファイルを検知
                use:[//検知した物にルールを適用　~というloaderを使ってね♥という意味
                    {
                        loader:MiniCssExtraPlugin.loader,//ローダは下から適用される
                    },
                    {
                        loader:'css-loader',
                    },
                ],
            },
            {
                test:/\.(png|jpg)/,
                use:[
                    {
                    loader:'file-loader',
                    options:{
                        esModule:false,
                        name:'images/[name].[ext]',

                    }

                }

                ]
            }
        ],
    },
    plugins:[
        new MiniCssExtraPlugin({
            filename:'./styleshhts/main.css',//階層も指定できる
        }),
        new HtmlWebpackPlugin({
            template:'./src/templates/index.html',//親、これに自動でcss,jacascが読み込まれる
        }),
        new CleanWebpackPlugin(),//ビルド前にdist配下を削除
    ],
}
