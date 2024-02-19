const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        } ,
        title: {
            type: String,
            required: true
        }
    } , {
        timestamps: true
    }
)

const postModel = mongoose.model('post', postSchema)

module.exports = postModel;