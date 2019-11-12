const assignConfig = require('./assignConfig');
const concatUserEnvironmentValue = require('./concatUserEnvironmentValue');

function setConfigDirectory(configPath, {env = process.env.NODE_ENV || 'development'}) {

  const commonConfig = require(`${configPath}/common`);
  const currentConfig = require(`${configPath}/${env}`);

  const config = assignConfig(commonConfig, currentConfig);

  concatUserEnvironmentValue(config, `${env}`);

  return config;
}

module.exports = setConfigDirectory;
