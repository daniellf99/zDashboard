module.exports = {
    entry: {
        index: "./src/index.js",
        client: "./src/client.js",
        login: "./src/login.js"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    }
};