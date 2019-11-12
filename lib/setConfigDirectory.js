const assignConfig = require('./assignConfig');
const concatUserEnvironmentValue = require('./concatUserEnvironmentValue');
const updateOption = require('./updateOption');

function setConfigDirectory(configPath, option) {
  option = updateOption(option);

  let config;
  try {
    const commonConfig = require(`${configPath}/${option.default}`);
    const currentConfig = require(`${configPath}/${option.env}`);

    config = assignConfig(commonConfig, currentConfig);
  } catch (e) {
    try {
      config = require(`${configPath}/${option.env}`);
    } catch (e) {
      config = require(`${configPath}/${option.default}`);
    }
  }

  concatUserEnvironmentValue(config, `${option.env}`);

  return config;
}

module.exports = setConfigDirectory;
