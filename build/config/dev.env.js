const getConfig = require('./getConfig')

module.exports = {
  NODE_ENV: '"development"',
  APP_ENV: '"dev"',
  ENV_CONFIG: JSON.stringify(getConfig())
}
