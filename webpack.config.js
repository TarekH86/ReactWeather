const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    entry: './app/app.jsx',
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
        },
        extensions: [".js", ".jsx"] // to enables users to leave off the extension when importing
    },
    module: {

        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'

            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
}