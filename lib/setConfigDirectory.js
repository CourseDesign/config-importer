const assignConfig = require('./assignConfig');
const concatUserEnvironmentValue = require('./concatUserEnvironmentValue');

function setConfigDirectory(configPath, option = {env: process.env.NODE_ENV || 'development'}) {

  let config;
  try {
    const commonConfig = require(`${configPath}/common`);
    const currentConfig = require(`${configPath}/${option.env}`);

    config = assignConfig(commonConfig, currentConfig);
  } catch (e) {
    config = require(`${configPath}/${option.env}`);
  }

  concatUserEnvironmentValue(config, `${option.env}`);

  return config;
}

module.exports = setConfigDirectory;
