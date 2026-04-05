// BlogPostModel.ts
import BaseModel from "./BaseModel.ts";

const BlogPostModel = BaseModel.extend({
  idAttribute: "slug",

  defaults: {
    slug: "",
    title: "",
    date: "",
    excerpt: "",
    content: "",
    tags: [] as string[],
  },
});

export default BlogPostModel;
