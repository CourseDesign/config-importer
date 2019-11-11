require('dotenv').config();
const concatElementUserEnvironmentValue = require('./concatElementUserEnvironmentValue');

function concatUserEnvironmentValue(config, configName) {
  concatElementUserEnvironmentValue(configName, [], config);

  config.env = configName;
}

module.exports = concatUserEnvironmentValue;
