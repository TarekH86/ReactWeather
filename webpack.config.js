const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'jquery/dist/jquery.min.js',
        'foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx',
    ],
    externals: {
        foundation: 'Foundation'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
    resolve: {
        alias: { // to import without using directories:
            Main: path.resolve(__dirname, 'app/components/main.jsx'),
            Nav: path.resolve(__dirname, 'app/components/nav.jsx'),
            Weather: path.resolve(__dirname, 'app/components/weather.jsx'),
            About: path.resolve(__dirname, 'app/components/about.jsx'),
            Examples: path.resolve(__dirname, 'app/components/examples.jsx'),
            WeatherForm: path.resolve(__dirname, 'app/components/weather-form.jsx'),
            WeatherMessage: path.resolve(__dirname, 'app/components/weather-message.jsx'),
            openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx'),
            ErrorModal: path.resolve(__dirname, 'app/components/error-modal.jsx'),
            apllicationStyle: path.resolve(__dirname, 'app/styles/app.scss')
        },
        extensions: [".js", ".jsx"] // to enables users to leave off the extension when importing
    },
    module: {

        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
                
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
}