const Koa = require('koa');
const app = new Koa();

// cors middleware
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8000');
  await next();
});

app.use(async ctx => {
  ctx.body = '"Hello server"';
});

module.exports = app;