function assignConfig(commonConfig, config) {
  const newConfig = commonConfig;

  for (const property in config) {
    if (newConfig[property] && typeof config[property] === 'object')
      newConfig[property] = assignConfig(newConfig[property], config[property]);
    else
      newConfig[property] = config[property];
  }

  return newConfig;
}

module.exports = assignConfig;
