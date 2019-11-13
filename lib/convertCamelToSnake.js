function isLowerCase(str) {
  return str === str.toLowerCase();
}

function convertCamelToSnake(camelString) {
  let snakeString = camelString.charAt(0).toUpperCase();

  for (let i = 1; i < camelString.length; i++) {
    const currentCharacter = camelString.charAt(i);

    if (isLowerCase(currentCharacter))
      snakeString += currentCharacter.toUpperCase();
    else
      snakeString += `_${currentCharacter}`;
  }

  return snakeString;
}

module.exports = convertCamelToSnake;
