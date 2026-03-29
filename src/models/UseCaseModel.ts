// UseCaseModel.ts
const UseCaseModel = Backbone.Model.extend({
  defaults: {
    title: "",
    description: "",
    link: null as string | null,
    hasCounter: false,
    counter: 0,
  },

  sync: function (...args: Parameters<typeof Backbone.sync>) {
    const xhr = Backbone.sync.apply(this, args);
    this._xhr = xhr;

    xhr.always(() => {
      this._xhr = null;
    });

    return xhr;
  },

  abort: function () {
    if (!this._xhr) return;

    this._xhr.abort();
    this._xhr = null;
    this.trigger("abort");
  },
});

export default UseCaseModel;
