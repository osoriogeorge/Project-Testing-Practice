function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("jorge"));

module.exports = reverseString;
