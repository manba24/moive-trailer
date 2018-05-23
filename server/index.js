const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')

//使用views中间件
app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}))
app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'hello',
        me: 'jay'
    })
})

app.listen(3000)