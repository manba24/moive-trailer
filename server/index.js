const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const views = require('koa-views')
const { resolve } = require('path')
const { connect,initSchemas } = require('./database/init')
const router = require('./routes')
;(async()=>{
   
    await connect()
    initSchemas()

    // require('./tasks/movie')
    // require('./tasks/api')

})()
// app.use(router.routes())
//     .use(router.allowedMethods())

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

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }

    console.log('server is start at 3000')
})