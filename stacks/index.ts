import { BigPugBank } from "./BigPugBank";
import { App } from "@serverless-stack/resources";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs",
    srcPath: "backend",
    memorySize: 128,
    bundle: {
      format: "esm",
    },
  });
  app.stack(BigPugBank);
}
