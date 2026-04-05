// BlogPostCollection.ts
import BaseCollection from "./BaseCollection.ts";
import BlogPostModel from "../models/BlogPostModel.ts";

const BlogPostCollection = BaseCollection.extend({
  model: BlogPostModel,
});

export default BlogPostCollection;
