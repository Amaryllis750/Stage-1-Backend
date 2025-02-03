const sumOfDigits = (num) => {
    // if the number is negative, remove the -ve sign
    num = num.replace("-", "");

    sum = 0;
    // convert the number to a string
    num_string = num.toString();
    // split the number in to an array of string and then convert each string to a Number
    numbers = num_string.split("");
    // add the numbers
    const result = numbers.reduce((total, item) =>  total += parseInt(item), 0);
    return result;
}

module.exports = {sumOfDigits}