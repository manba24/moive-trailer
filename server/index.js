const Koa = require('koa')
const mongoose = require('mongoose')
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchemas } = require('./database/init')
const R = require('ramda')
const MIDDLEWARES = ['router', 'parcel']
// const router = require('./routes')
const useMiddlewares = (app) => {
    R.map(
        R.compose(
            R.forEachObjIndexed(initWith => initWith(app)),
            require,
            name => path.resolve(__dirname, `./middlewares/${name}`),
        )
    )(MIDDLEWARES)
};
(async () => {

    await connect()
    initSchemas()
    // require('./tasks/movie')
    // require('./tasks/api')
    const app = new Koa()
    console.log('useMiddlewares')
    await useMiddlewares(app)
    console.log(router)

    app.listen(3000, (err) => {
        if (err) {
            throw err
        }
        console.log('server is start at 3000')
    })

})()




