const assignConfig = require('./assignConfig');
const concatUserEnvironmentValue = require('./concatUserEnvironmentValue');
const updateOption = require('./updateOption');

function setConfigDirectory(configPath, option) {
  option = updateOption(option);

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
