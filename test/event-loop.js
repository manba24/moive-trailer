const {readFile,readFileSync} = require('fs')
const {resolve}  = require('path')
setImmediate(()=>{
    console.log('[阶段3，immediate 1')
})

setImmediate(()=>{
    console.log('[阶段3，immediate 2')
})
setImmediate(()=>{
    console.log('[阶段3，immediate 3')
    console.log('同步读取文件进行中。。。')
    const readSync = readFileSync(resolve(__dirname,'../package.json'),'utf-8')
    process.nextTick(()=>{
        console.log('[...待切入下一阶段]process.nextTick sync 回调5')
    })
})

Promise.resolve().then(()=>{
    console.log('promise的第1次回调')
    setImmediate(()=>{
        console.log('[阶段3，immediate 4')
    })
    
})

readFile('../package.json','utf-8',data =>{
    console.log('[阶段2.。。IO操作]完成文件1读操作回调')
    readFile('../package.json','utf-8',data =>{
        console.log('[阶段2.。。IO操作]完成文件2读操作回调')
        setImmediate(()=>{
            console.log('[阶段3，iO回调里的setImmediate')
        })
        setTimeout(() => {
            console.log('[阶段1，setimeout iO回调里的setTimeout')
        }, 0);
    })
})
setImmediate(()=>{
    console.log('[阶段3，immediate 5')
    Promise.resolve().then(()=>{
        console.log('promise的第2次回调')   
        process.nextTick(()=>{
            console.log('[...待切入下一阶段]process.nextTick 回调5')
        })
    })
})
setTimeout(() => {
    console.log('[阶段1，setimeout 1')
}, 0);
setTimeout(() => {
    console.log('[阶段1，setimeout 2')
    process.nextTick(()=>{
        console.log('[...待切入下一阶段]process.nextTick 回调1')
    })
}, 0);
setTimeout(() => {
    console.log('[阶段1，setimeout 3')
}, 0);

process.nextTick(()=>{
    console.log('[...待切入下一阶段]process.nextTick 回调2')
    process.nextTick(()=>{
        console.log('[...待切入下一阶段]process.nextTick 回调3')
    })
})
process.nextTick(()=>{
    console.log('[...待切入下一阶段]process.nextTick 回调4')
})