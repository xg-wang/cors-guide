const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

app.use(serve(`${__dirname}/assets`))

module.exports = app;