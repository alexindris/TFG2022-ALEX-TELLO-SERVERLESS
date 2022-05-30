import {
  Api,
  ReactStaticSite,
  StackContext,
  ViteStaticSite,
} from "@serverless-stack/resources";

export function BigPugBank({ stack }: StackContext) {
  // Create a HTTP API
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

  const site = new ViteStaticSite(stack, "ReactSite", {
    path: "frontend",
    environment: {
      VITE_API_URL: api.url,
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
