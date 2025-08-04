import * as blogService from '../services/blog.service.js';
import {asyncHandler} from '../../lib/util.js'; 
import { Validator } from './../../lib/validator.js';
import { createBlogRequest } from './../requests/create-blog.request.js';
import { ValidationError } from '../../lib/error-definitions.js';

export const createNewBlog = asyncHandler(async(req, res) =>
{
    const validator = new Validator();
    const {errors, value} = validator.validate(createBlogRequest, req.body);

    if (errors) throw new ValidationError('the request failed with the following errors', errors);
    await blogService.createBlog(value);

    return res.status(201).json({
        success: true,
        message: 'new blog record created'
    })
});

export const fetchAllBlogs = asyncHandler(async(req, res) =>
{

    const blogs = Object.entries(req.query).length >= 1
    ? await blogService.getBlog(req.query)
    : await blogService.getBlog()

    return res.status(201).json({
        success: true,
        message: 'blogs retrieved',
        data: {
            blogs
        }
    })
})

export const fetchBlog = asyncHandler(async(req, res) =>
{
    const {id} = req.params;
    const blog = await blogService.getBlogs(id);
    return res.json({
        success: true,
        message: 'blog retrieved',
        data: {
            blog
        }
    })
})

export const upadteSingleBlog = asyncHandler(async(req, res) =>
{
    const {id} = req.params;
    const validator = new Validator()
    const {errors, value} = validator.validate(createBlogRequest, req.body);

    if (errors) throw new ValidationError('the request failed with the following errors', errors);

    await blogService.updateBlog(id, value)

    return res.json({
        success: true,
        message: "blog updated"
    });
});

export const deleteSingleBlog = asyncHandler(async(req, res) =>
{
    const {id} = req.params;
    await blogService.deleteBlog(id);     
    return res.json({
        success: true,
        message: "blog deleted"
    })
})