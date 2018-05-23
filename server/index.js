const Koa = require('koa')
const app = new Koa()
// const ejs = require('ejs')
const pug = require('pug')
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl')

app.use(async (ctx, next) => {
    ctx.type = "text/html; charset=utf8"
    ctx.body = pug.render(pugTpl, {
        you: 'hello',
        me: 'jay'
    })
})

app.listen(3000)