const assignConfig = require('./assignConfig');
const concatUserEnvironmentValue = require('./concatUserEnvironmentValue');
const {setConfig} = require('./config');

const env = process.env.NODE_ENV || 'development';

function setConfigDirectory(configPath) {
  const commonConfig = require(`${configPath}/common`);
  const currentConfig = require(`${configPath}/${env}`);

  const config = assignConfig(commonConfig, currentConfig);

  concatUserEnvironmentValue(config, `${env}`);

  setConfig(config);
}

module.exports = setConfigDirectory;
