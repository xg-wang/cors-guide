const Koa = require('koa');
const app = new Koa();

// cors middleware
app.use(async (ctx, next) => {
  await next();
});

app.use(async ctx => {
  ctx.body = '"Hello server"';
});

module.exports = app;