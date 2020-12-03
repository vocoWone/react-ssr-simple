const webpack = require("webpack");
const chalk = require("chalk");
const createWebpackClientConfig = require("./config/webpack.config.client");
const createWebpackBuildConfig = require("./config/webpack.config.server");
const webpackClientConfig = createWebpackClientConfig();
const webpackBuildConfig = createWebpackBuildConfig();

const clientCompiler = webpack(webpackClientConfig)

clientCompiler.run((error, stats) => {
    if (error) {
        console.error(error.stack || error);
        if (error.details) console.error(error.details);
        process.exit(1);
    } else {
        const statsJSON = stats.toJson();
         console.info(statsJSON)
        console.info(chalk`{white.bold Client Build successfully}`);
    }
});

const serverCompiler = webpack(webpackBuildConfig);

serverCompiler.run((error, stats) => {
    if (error) {
        console.error(error.stack || error);
        if (error.details) console.error(error.details);
        process.exit(1);
    } else {
        const statsJSON = stats.toJson();
         console.info(statsJSON)
        console.info(chalk`{white.bold Server Build successfully}`);
    }
});