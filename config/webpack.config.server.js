const path = require("path");
const nodeExternal = require('webpack-node-externals');

function resolve(relativePath) {
    return path.resolve(__dirname, `./${relativePath}`);
}

function createConfig (){
    return  [
        {
            target: 'node',
            mode:'production',
            entry: {
                index: resolve("../server/index.tsx"),
            },
            output: {
                path: resolve("../dist"),
                filename: "server.js",
            },
            externals: [nodeExternal()],
            module: {
                rules: [
                    {
                        test: /\.(ts|tsx)$/,
                        include: [resolve("../server")],
                        loader: "ts-loader",
                    }
                ],
            },
        },
    ]   
}

module.exports = createConfig;
