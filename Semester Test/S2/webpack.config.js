const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve("public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                }
            }
        ]
    }
}