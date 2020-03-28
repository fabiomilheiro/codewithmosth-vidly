import * as Sentry from "@sentry/browser";

const init = () => {
  Sentry.init({
    dsn: "https://445ce935deab4ca49cc6a7edfaa8e0af@sentry.io/5175781"
  });
};

const logError = error => {
  Sentry.captureException(error);
};

export default {
  init,
  logError
};
