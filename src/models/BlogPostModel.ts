// BlogPostModel.ts
const BlogPostModel = Backbone.Model.extend({
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
