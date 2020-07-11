const express = require('express')();

module.exports = ({
  config,
  rootRouter,
  logger,
}) => {
  const {
    express: {
      port,
    },
  } = config;

  const app = express.disable('x-powered-by').use(rootRouter);

  return {
    express: app,
    start: () => app
      .listen(port, () => logger.info(`[PID ${process.pid}] Listening at port ${port}`)),
  };
};
