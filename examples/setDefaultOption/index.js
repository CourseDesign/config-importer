const configImporter = require('../../dist/configImporter');

const config = configImporter.import(__dirname, {default: 'default'});

module.exports = config;
