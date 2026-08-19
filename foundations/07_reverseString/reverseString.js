const reverseString = function (str) {
  let reversed = "";
  // loop overy the string
  for (let i = str.length - 1; i >= 0; i--) {
    // pop the last character and add it to a empty string
    reversed += str[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
