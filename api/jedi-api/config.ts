import * as lodash from "lodash"

const defaultConfig = require('./');

const envConfig = require(`./configs/${process.env.NODE_ENV || 'development'}.config.json`);

const config: any = lodash.merge(defaultConfig, envConfig)

module.exports = config;
