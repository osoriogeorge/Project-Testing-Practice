function caesarCipher(string, nbrPosition) {
  if (typeof string !== "string" || string.length === 0) {
    return "";
  }

  let result = "";

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);

    if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
      result += string.charAt(i);
      continue;
    }

    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + nbrPosition) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + nbrPosition) % 26) + 97;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

module.exports = caesarCipher;
