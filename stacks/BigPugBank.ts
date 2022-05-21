import {
  Api,
  StackContext,
  StaticSite,
  Table,
} from "@serverless-stack/resources";

export function BigPugBank({ stack }: StackContext) {
  // Create a HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        environment: {
          MONGODB_URI: process.env.MONGODB_URI,
        },
      },
    },
    routes: {
      "POST /": "lambda.main",
    },
  });

  const site = new StaticSite(stack, "VueJSSite", {
    path: "frontend",
    buildOutput: "dist",
    buildCommand: "npm run build",
    errorPage: "redirect_to_index_page",
    environment: {
      // Pass in the API endpoint to our app
      VUE_APP_API_URL: api.url,
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
