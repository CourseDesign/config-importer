const convertCamelToSnake = require('./convertCamelToSnake');
const getEnvironmentValue = require('./getEnvironmentValue');
const option = require('./option');
const ValueIsUndefined = require('./exception/valueIsUndefined');

function concatElementUserEnvironmentValue(configName, path, current) {
  let valueName = '';
  let currentPath = [...path];

  for (const property in current) {
    if (property === option.valueName) {
      currentPath[currentPath.length - 1] = convertCamelToSnake(current[property]);
      continue;
    }

    if (current[property] && typeof current[property] === 'object') {
      valueName = convertCamelToSnake(property);

      concatElementUserEnvironmentValue(configName, currentPath.concat([valueName]), current[property]);
      continue;
    }

    const propertyName = convertCamelToSnake(property);

    const environmentValue = getEnvironmentValue(
      convertCamelToSnake(configName), currentPath.concat([propertyName]),
    );

    if (current[property] === undefined && environmentValue === undefined)
      throw new ValueIsUndefined(currentPath.concat([propertyName]).join('_'));

    current[property] = environmentValue || current[property];
  }
}

module.exports = concatElementUserEnvironmentValue;
