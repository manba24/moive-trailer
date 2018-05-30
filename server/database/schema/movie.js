const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed

const moiveSchema = new Schema({
    doubanId:String,
    rate:Number,
    title:String,
    summaru:String,
    video:String,
    poster:String,
    cover:String,
 
    videoKey:String,
    posterKey:String,
    coverKey:String,

    rawTitle:String,
    moiveTypes:[String],
    pubdate:Mixed,
    year:Number,
    tags:[String],
    meta:{
        createdAt:{
            type:Date,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            default:Date.now()
        }
    }

})

mongoose.model('Moive',moiveSchema)