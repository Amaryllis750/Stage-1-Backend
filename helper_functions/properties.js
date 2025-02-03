const returnProperties = (num) => {
    const properties = []

    // if the number is negative, replace the -ve sign
    num.replace("-", "");

    // get the array of numbers
    const num_array = num.toString().split("");
    num_array.forEach((item, array, index) => {array[index] = parseInt(item)});
    // check if the sum of the cubes of the number is equal to num
    const sum_of_cubes = num_array.reduce((total, item) => total += item**3, 0); 

    if(sum_of_cubes === num) properties.push("armstrong");

    if (num % 2 === 0) properties.push("even"); 
        else properties.push("odd");
    
    return properties;
}

module.exports = {returnProperties}