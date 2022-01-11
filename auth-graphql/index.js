const logger = require('pino')();
const app = require('./server/server');

app.listen(4000, () => {
  logger.info('Listening');
});
