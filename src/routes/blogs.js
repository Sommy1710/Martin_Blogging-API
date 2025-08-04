import {Router} from 'express';
import { createNewBlog, deleteSingleBlog, fetchBlog, upadteSingleBlog, fetchAllBlogs } from '../app/controllers/blog.controller.js';
const router = Router();

router.get('/', fetchAllBlogs);
router.post("/", createNewBlog);
router.get('/:id', fetchBlog);
router.put("/:id", upadteSingleBlog);
router.delete("/:id", deleteSingleBlog); 

export const blogsRouter = router;