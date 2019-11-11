const convertCamelToSnake = require('./convertCamelToSnake');
const getEnvironmentValue = require('./getEnvironmentValue');

const VALUE_NAME = 'valueName';

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

module.exports = concatElementUserEnvironmentValue;
