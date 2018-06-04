const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const categorySchema = new Schema({
    name:{
        unique:true,
        type:String
    },
    category:{
        type:ObjectId,
        ref:'Moive'
    },
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

categorySchema.pre('save',next=>{
    if(this.isNew){
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    }else{
        this.meta.updatedAt = Date.now()
    }

    next()
})

mongoose.model('Category',categorySchema)