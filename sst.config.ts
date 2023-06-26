import type { SSTConfig } from "sst";
import { BigPugBank } from "./stacks/BigPugBank";

export default {
  config(input) {
    return {
      name: "big-pug-bank",
      region: "eu-west-3",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: "nodejs18.x",
    });

    app.stack(BigPugBank);
  },
} satisfies SSTConfig;
