const globalOption = require('./option');
const assignConfig = require('./assignConfig');

function updateOption(option) {
  return assignConfig(globalOption, option);
}

module.exports = updateOption;
