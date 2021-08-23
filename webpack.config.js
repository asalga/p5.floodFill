module.exports = {
    mode: "development",
    devServer: {
        contentBase: './examples/'
    },
    output: {
        filename: 'p5.floodFill.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}