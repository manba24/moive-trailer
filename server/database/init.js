const mongoose = require('mongoose')
const db = 'mongodb://localhost/douban-test'

mongoose.Promise = global.Promise

exports.connect = () =>{
    let maxConnectTimes = 0
    return new Promise((resolve,reject)=>{
        
        if(process.env.NODE_ENV !== 'production'){
            mongoose.set('debug',true)
        }

        mongoose.connect(db)

        mongoose.connection.on('disconnectd',()=>{
            maxConnectTimes++
            if(maxConnectTimes < 5){
                mongoose.connect(db)
            } else {
                throw new Error('数据库挂了')
            }
           
        })

        mongoose.connection.on('error',(err)=>{
            if(maxConnectTimes < 5){
                mongoose.connect(db)
            } else {
                throw new Error('数据库挂了')
            }
        
        })
        mongoose.connection.once('open',()=>{
            // const Dog = mongoose.model('Dog',{name:String})
            // const doga = new Dog({name:'alpha'})
            // doga.save().then(()=>{
            //     console.log('wang~')
            // })
            resolve()
            console.log('mongodb Connected successful')
        
        })
    })

}