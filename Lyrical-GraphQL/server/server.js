const express = require('express');
const logger = require('pino')();
require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

const dbAddress = process.env.DB_HOST || '127.0.0.1';
const dbPort = process.env.DB_PORT || 27017;
const dbName = 'lyrical';

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbAddress}:${dbPort}/${dbName}`);
mongoose.connection
  .once('open', () => logger.info('Connected to MongoDB instance.'))
  .on('error', (error) => logger.error('Error connecting to MongoDB:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
