const configImporter = require('../../dist/configImporter');

const config = configImporter.import(__dirname, {env: 'test'});

const option = require('../../lib/option');

module.exports = config;
