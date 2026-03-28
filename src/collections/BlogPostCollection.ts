// BlogPostCollection.ts
import BlogPostModel from "../models/BlogPostModel.ts";

const BlogPostCollection = Backbone.Collection.extend({
  model: BlogPostModel,
});

export default BlogPostCollection;
