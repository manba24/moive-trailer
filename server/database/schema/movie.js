const mongoose = require('mongoose')

const Schema = mongoose.Schema
const { ObjectId, Mixed } = Schema.Types

const moiveSchema = new Schema({
    doubanId: {
        unique: true,
        required: true,
        type: String
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    rate: Number,
    title: String,
    summary: String,
    video: String,
    poster: String,
    cover: String,

    videoKey: String,
    posterKey: String,
    coverKey: String,

    rawTitle: String,
    moiveTypes: [String],
    pubdate: Mixed,
    year: Number,
    tags: [String],
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }

})

moiveSchema.pre('save', next => {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }

    next()
})

mongoose.model('Moive', moiveSchema)