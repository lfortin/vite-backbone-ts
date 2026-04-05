// BaseModel.ts
const BaseModel = Backbone.Model.extend({
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

export default BaseModel;
