import React from "react"
import Koa from "koa";
import koaStatic from 'koa-static';
import { renderToString } from "react-dom/server";
import path from "path";
const Component = () => <div>koa server</div>


const app = new Koa();

app.use(koaStatic(path.join(__dirname, "../dist")))

function getServerHtml() {
    const appHtml = renderToString(<Component />);
    return appHtml;
}

app.use(async (ctx) => {
    ctx.body = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>demo</title>
    </head>
    <body>
        <div id="root">${getServerHtml()}</div>
        <script src="/client.js"></script>
    </body>
</html>
    `
})

app.listen(8080, () => {
    console.info("server started")
})