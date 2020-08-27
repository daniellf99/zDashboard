module.exports = {
    entry: {
        entry: './app/App.js'
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    }
};