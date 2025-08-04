import Joi from 'joi';

export const createBlogRequest = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  category: Joi.string().required(),
  //tags: Joi.array().items(Joi.string()).required(),
});