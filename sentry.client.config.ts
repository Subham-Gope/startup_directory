import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f726db15b918753e36afb1190d1d9e99@o4507978720870400.ingest.us.sentry.io/4509253598969856",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
  tracesSampleRate: 1,

  replaysSessionSampleRate: 0.1,
});
