const fs = require('fs-plus')
const path = require('path')

const getConfig = function () {
  const env = process.env.APP_ENV || 'dev'
  const def = JSON.parse(fs.readFileSync(path.join(__dirname, 'default.json'), 'utf-8'))
  return def[env]
}

module.exports = getConfig
