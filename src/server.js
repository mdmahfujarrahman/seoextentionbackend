import app from './app.js';
import config from './app/config/index.js';
import { errorLogger, logger } from './app/shared/logger.js';

const main = async () => {
  try {
    app.listen(config.port, () => {
      logger.info(`Server is listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error(error);
  }
};

main();
