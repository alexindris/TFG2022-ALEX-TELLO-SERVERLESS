import { App } from "@serverless-stack/resources";
import { BigPugBank } from "./BigPugBank";

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "backend",
    bundle: {
      format: "esm",
    },
  });
  app.stack(BigPugBank);
}
