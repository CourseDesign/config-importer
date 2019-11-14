require('dotenv').config()

function getEnvironmentValue(configName, names) {
  let namePath = names[0];

  for (let i = 1; i < names.length; i++)
    namePath += `_${names[i]}`;

  return process.env[`${namePath}_${configName}`] || process.env[`${namePath}`];
}

module.exports = getEnvironmentValue;
