import {
  Api,
  Queue,
  ReactStaticSite,
  StackContext,
} from "@serverless-stack/resources";

export function BigPugBank({ stack }: StackContext) {
  // Create ResultQueue
  const resultQueue = new Queue(stack, "resultQueue", {
    consumer: {
      function: {
        handler: "workers/resultWorker.save",
        timeout: 10,
        environment: {
          DATABASE_URL: process.env.DATABASE_URL ?? "default_uri",
          DATABASE_NAME: process.env.DATABASE_NAME ?? "test",
        },
      },
    },
  });

  // Create ScoringQueue
  const scoringQueue = new Queue(stack, "scoringQueue", {
    consumer: {
      function: {
        handler: "workers/scoringWorker.score",
        timeout: 10,
        environment: {
          RESULT_QUEUE_NAME: resultQueue.queueName,
        },
        permissions: [resultQueue],
      },
    },
  });

  // Create the HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        environment: {
          SCORING_QUEUE_NAME: scoringQueue.queueName,
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

  api.attachPermissions([scoringQueue]);

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
