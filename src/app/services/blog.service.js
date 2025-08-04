import { aggregateResults } from "../../lib/util.js";
import { Blog } from "../schema/blog.schema.js";

export const createBlog = async (payload) => {
    return await Blog.create(payload);
}

export const getBlog = async(payload) => {
    return (payload) ? await aggregateResults(Blog, payload) : await Blog.find()
};

export const getBlogs = async (id) => {
    return await Blog.findById(id)
};

export const updateBlog = async (id, payload) => {
    return await Blog.findByIdAndUpdate(id, payload, {new: true});
};

export const deleteBlog = async (id) => {
    return await Blog.findByIdAndDelete(id);
};