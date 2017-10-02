const Koa = require('koa');
const app = new Koa();

// cors middleware
app.use(async (ctx, next) => {
  const origin = ctx.get('Origin');
  if (ctx.method !== 'OPTIONS') {
    ctx.set('Access-Control-Allow-Origin', origin);
    ctx.set('Access-Control-Allow-Credentials', 'true');
  } else if (ctx.get('Access-Control-Request-Method')) {
    ctx.set('Access-Control-Allow-Origin', origin);
    ctx.set('Access-Control-Allow-Methods', 'GET');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.set('Access-Control-Max-Age', '42');
    ctx.set('Access-Control-Allow-Credentials', 'true');
  }
  await next();
});

app.use(async ctx => {
  ctx.body = '"Hello server"';
});

module.exports = app;