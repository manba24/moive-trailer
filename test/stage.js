const {readFile} = require('fs')
const EventEmitter = require('events')

class EE extends EventEmitter {}

const yy = new EE()

yy.on('event',()=>{
    console.log('something happend')
})

setTimeout(()=>{
    console.log('0毫秒执行回调')
},0)

setTimeout(()=>{
    console.log('100毫秒执行回调')
},100)

setTimeout(()=>{
    console.log('200毫秒执行回调')
},200)

readFile('../package.json','utf-8',data =>{
    console.log('完成文件1读操作回调')
})

readFile('../README.md','utf-8',data =>{
    console.log('完成文件2读操作回调')
})

setImmediate(()=>{
    console.log('immeiate 回调')
})

process.nextTick(()=>{
    console.log('process.nextTick 回调')
})

Promise.resolve().then(()=>{
    yy.emit('event')
    process.nextTick(()=>{
        console.log('process.nextTick 2回调')
    })

    console.log('promise的第1次回调')
}).then(()=>{
    console.log('promise的第2次回调')
})