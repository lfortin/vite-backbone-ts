// AppRouter.ts
import type { View } from "backbone";
import HomeView from "../views/HomeView.ts";
import AboutView from "../views/AboutView.ts";
import HelpView from "../views/HelpView.ts";
import NotFoundView from "../views/NotFoundView.ts";
import BlogIndexView from "../views/BlogIndexView.ts";
import BlogPostView from "../views/BlogPostView.ts";
import { usecases } from "../data/usecases.ts";
import { blogPosts } from "../data/blogPosts.ts";

const home = new HomeView();
const about = new AboutView();
const help = new HelpView();
const blogIndexView = new BlogIndexView();
const blogPostView = new BlogPostView();
const notFound = new NotFoundView();

const AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    about: "about",
    help: "help",
    blog: "blogIndex",
    "blog/page/:page": "blogIndex",
    "blog/:slug": "blogPost",
    "*path": "notFound",
  },

  initialize() {
    // insert views into the DOM
    $("#app").empty();
    $("#app").append(home.$el);
    $("#app").append(about.$el);
    $("#app").append(help.$el);
    $("#app").append(blogIndexView.$el);
    $("#app").append(blogPostView.$el);
    $("#app").append(notFound.$el);
  },

  _showView(view: View) {
    if (!view?.$el) {
      return;
    }
    $("#app > div").not(view.el).hide();
    view.$el.show();
  },

  home() {
    home.collection.reset(usecases); // Show main use case list
    this._showView(home);
  },

  about() {
    this._showView(about.render());
  },

  help() {
    this._showView(help.render());
  },

  blogIndex(page?: string) {
    const pageNum = page !== undefined && page !== "" ? Number(page) : 1;
    blogIndexView.collection.reset(blogPosts);
    blogIndexView.setPage(Number.isFinite(pageNum) ? pageNum : 1);
    this._showView(blogIndexView);
  },

  blogPost(slug?: string) {
    if (!slug) {
      this.notFound();
      return;
    }

    const found = _.findWhere(blogPosts, { slug });

    if (!found) {
      this.notFound();
      return;
    }

    blogPostView.model.set(found);
    this._showView(blogPostView);
  },

  notFound() {
    this._showView(notFound.render());
  },
});

export default AppRouter;
