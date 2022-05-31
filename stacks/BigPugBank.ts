import {
  Api,
  ReactStaticSite,
  StackContext,
} from "@serverless-stack/resources";

export function BigPugBank({ stack }: StackContext) {
  // Create the HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        environment: {
          DATABASE_URL: process.env.DATABASE_URL ?? "default_uri",
          DATABASE_NAME: process.env.DATABASE_NAME ?? "test",
        },
      },
    },
    routes: {
      "GET /applications": "./api/applications.getAll",
      "POST /applications": "./api/applications.create",
      "GET /application/{id}": "./api/applications.getOne",
    },
  });

  // Deploy our React app
  const site = new ReactStaticSite(stack, "ReactSite", {
    path: "frontend",
    environment: {
      REACT_APP_API_URL: api.url,
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
