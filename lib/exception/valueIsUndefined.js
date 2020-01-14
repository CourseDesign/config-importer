class ValueIsUndefined extends Error {
  constructor(value = 'Value') {
    super(value + ' is undefined.');
  }
}

module.exports = ValueIsUndefined;
