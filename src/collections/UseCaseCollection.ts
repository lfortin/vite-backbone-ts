// UseCaseCollection.ts
import type { Collection } from "backbone";
import UseCaseModel from "../models/UseCaseModel.ts";

type UseCaseCollectionInstance = Collection & { _xhr?: JQuery.jqXHR | null };

const UseCaseCollection = Backbone.Collection.extend({
  model: UseCaseModel,

  sync: function (this: UseCaseCollectionInstance, ...args: Parameters<typeof Backbone.sync>) {
    const xhr = Backbone.sync.apply(this, args);
    this._xhr = xhr;

    xhr.always(() => {
      this._xhr = null;
    });

    return xhr;
  },

  abort: function (this: UseCaseCollectionInstance) {
    if (!this._xhr) return;

    this._xhr.abort();
    this._xhr = null;
    this.trigger("abort");
  },
});

export default UseCaseCollection;
