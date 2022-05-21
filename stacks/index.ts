import { App } from "@serverless-stack/resources";
import { BigPugBank } fro./BigPugBankugBank";

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "backend",
  });
  app.stack(BigPugBank);
}
