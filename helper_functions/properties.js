const returnProperties = (num) => {
    const properties = [];
    const is_neg = false;   // this is a flag that tracks whether the number is negative or not
    if(num.includes("-")) is_neg = true;
    // if the number is negative, replace the -ve sign
    num = num.replace("-", "");


    // get the array of numbers
    const num_array = num.toString().split("");
    num_array.forEach((item, array, index) => {array[index] = parseInt(item)});
    // check if the sum of the cubes of the number is equal to num
    const sum_of_powers = num_array.reduce((total, item) => total += item**(num_array.length), 0); 

    if(sum_of_powers === parseInt(num) && !is_neg) properties.push("armstrong");    // if the number sum_of_powers is equal to the number and the number is not negative, then the number can be an armstrong number

    if (num % 2 === 0) properties.push("even"); 
        else properties.push("odd");
    
    return properties;
}

module.exports = {returnProperties}