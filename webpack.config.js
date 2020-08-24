module.exports = {
    entry: {
        index: "./src/index.js",
        client: "./src/client.js"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    }
};