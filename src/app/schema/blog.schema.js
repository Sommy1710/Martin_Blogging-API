import {model, Schema} from 'mongoose'

const BlogSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    /*tags: {
        type: [String],
        required: true,
    },*/
});

export const Blog = model('Blog', BlogSchema);