require('dotenv').config();

function checkoutType(param) {
  if (isNaN(param))
    return param
  else
    return Number(param)
}

function getEnvironmentValue(configName, names) {
  let namePath = names.join('_');
  let result = process.env[`${namePath}_${configName}`] || process.env[`${namePath}`];

  return checkoutType(result)
}

module.exports = getEnvironmentValue;
