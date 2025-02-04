// const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);
const isNumeric = (string) => /^[+-]?\d+$/.test(string);

module.exports = {isNumeric}