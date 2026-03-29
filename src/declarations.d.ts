// Allow TypeScript to recognize SCSS files as modules
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

// Optional: Do the same for CSS if you use it
declare module "*.css";
