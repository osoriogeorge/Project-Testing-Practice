function capitalize(string) {
  if (typeof string !== "string" || string.length === 0) {
    return ""; // Devuelve una cadena vacía si la entrada no es válida
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize("jorge"));

module.exports = capitalize;
