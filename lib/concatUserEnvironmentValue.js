require('dotenv').config();
const convertCamelToSnake = require('./convertCamelToSnake');

const VALUE_NAME = 'valueName';

function getEnvironmentValue(configName, names) {
  let namePath = names[0];

  for (let i = 1; i < names.length; i++) {
    namePath += `_${names[i]}`;
  }

  return process.env[`${namePath}_${configName}`] || process.env[`${namePath}`];
}

function concatElementUserEnvironmentValue(configName, path, current) {
  let valueName = '';
  let currentPath = [...path];
  for (const property in current) {
    if (property === VALUE_NAME) {
      currentPath[currentPath.length - 1] = convertCamelToSnake(current[property])

      continue;
    }

    const propertyName = convertCamelToSnake(property);

    if (current[property] && typeof current[property] === 'object') {
      valueName = convertCamelToSnake(property);

      concatElementUserEnvironmentValue(configName, currentPath.concat([valueName]), current[property]);
      continue;
    }

    const environmentValue = getEnvironmentValue(
      convertCamelToSnake(configName), currentPath.concat([propertyName]),
    );
    current[property] = environmentValue || current[property];
  }
}

function concatUserEnvironmentValue(config, configName) {
  concatElementUserEnvironmentValue(configName, [], config);

  config.env = configName;
}

module.exports = concatUserEnvironmentValue;
