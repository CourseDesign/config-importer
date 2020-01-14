module.exports = camelString => camelString.replace(/[A-Z]/g, '_$&').toUpperCase();
