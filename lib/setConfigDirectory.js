const assignConfig = require('./assignConfig');
const concatUserEnvironmentValue = require('./concatUserEnvironmentValue');

function setConfigDirectory(configPath, option = {env: process.env.NODE_ENV || 'development'}) {

  const commonConfig = require(`${configPath}/common`);
  const currentConfig = require(`${configPath}/${option.env}`);

  const config = assignConfig(commonConfig, currentConfig);

  concatUserEnvironmentValue(config, `${option.env}`);

  return config;
}

module.exports = setConfigDirectory;
