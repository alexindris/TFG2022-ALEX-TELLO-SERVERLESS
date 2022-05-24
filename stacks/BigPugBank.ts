import { Api, StackContext, StaticSite } from "@serverless-stack/resources";

export function BigPugBank({ stack }: StackContext) {
  // Create a HTTP API
  const api = new Api(stack, "Api", {
    routes: {
      "GET /applications": "./api/applications.getAll",
      "POST /applications": "./api/applications.create",
      "GET /application/{id}": "./api/applications.getOne",
    },
  });

  // const site = new StaticSite(stack, "VueJSSite", {
  //   path: "frontend",
  //   buildOutput: "dist",
  //   buildCommand: "npm run build",
  //   errorPage: "redirect_to_index_page",
  //   environment: {
  //     // Pass in the API endpoint to our app
  //     VUE_APP_API_URL: api.url,
  //   },
  // });

  // Show the URLs in the output
  stack.addOutputs({
    // SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
