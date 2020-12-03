const path = require("path");

function resolve(relativePath) {
    return path.resolve(__dirname, `./${relativePath}`);
}

function createConfig (){
    return  [
        {
            mode:'production',
            entry: {
                index: resolve("../client/index.tsx"),
            },
            output: {
                path: resolve("../dist"),
                filename: "client.js",
            },
            module: {
                rules: [
                    {
                        test: /\.(ts|tsx)$/,
                        include: [resolve("../client")],
                        loader: "ts-loader",
                    }
                ],
            },
        },
    ]   
}

module.exports = createConfig;
