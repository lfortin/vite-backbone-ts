// UseCaseModel.ts
import BaseModel from "./BaseModel.ts";

const UseCaseModel = BaseModel.extend({
  defaults: {
    title: "",
    description: "",
    link: null as string | null,
    hasCounter: false,
    counter: 0,
  },
});

export default UseCaseModel;
