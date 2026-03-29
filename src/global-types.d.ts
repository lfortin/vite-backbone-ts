// global-types.d.ts
declare global {
  const $: typeof import("jquery").default;
  const jQuery: typeof import("jquery").default;
  const _: typeof import("underscore").default;
  const Backbone: typeof import("backbone").default;
  const Handlebars: typeof import("handlebars").default;

  interface Window {
    $: typeof import("jquery").default;
    jQuery: typeof import("jquery").default;
    _: typeof import("underscore").default;
    Backbone: typeof import("backbone").default;
    Handlebars: typeof import("handlebars").default;
  }
}

export {};
