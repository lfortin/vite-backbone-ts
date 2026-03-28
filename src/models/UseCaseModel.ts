// UseCaseModel.ts
import type { Model } from "backbone";

type UseCaseModelInstance = Model & { _xhr?: JQuery.jqXHR | null };

const UseCaseModel = Backbone.Model.extend({
  defaults: {
    title: "",
    description: "",
    link: null as string | null,
    hasCounter: false,
    counter: 0,
  },

  sync: function (this: UseCaseModelInstance, ...args: Parameters<typeof Backbone.sync>) {
    const xhr = Backbone.sync.apply(this, args);
    this._xhr = xhr;

    xhr.always(() => {
      this._xhr = null;
    });

    return xhr;
  },

  abort: function (this: UseCaseModelInstance) {
    if (!this._xhr) return;

    this._xhr.abort();
    this._xhr = null;
    this.trigger("abort");
  },
});

export default UseCaseModel;
