// UseCaseCollection.ts
import BaseCollection from "./BaseCollection.ts";
import UseCaseModel from "../models/UseCaseModel.ts";

const UseCaseCollection = BaseCollection.extend({
  model: UseCaseModel,
});

export default UseCaseCollection;
