const getConfig = require('./getConfig')

module.exports = {
  NODE_ENV: '"production"',
  APP_ENV: `"${process.env.APP_ENV || 'prod'}"`,
  ENV_CONFIG: JSON.stringify(getConfig())
}
