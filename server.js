// import libraries
const { profileEnd } = require('console');
const express = require('express');
const https = require('https');

// include middleware


const app = express();
const PORT = process.env.PORT || 8010;

const getFunFact = async () => {
    try {
        const response = await fetch("http://numbersapi.com/43/math");
        const data = await response.text();
        return data;
    }
    catch (err) {
        throw Error("Failed to fetch number facts");
    }
}

const sumOfDigits = (num) => {
    sum = 0;
    // convert the number to a string
    num_string = num.toString();
    // split the number in to an array of string and then convert each string to a Number
    numbers = num_string.split("");
    // add the numbers
    const result = numbers.reduce((total, item) =>  total += parseInt(item), 0);
    return result;
}

const returnProperties = (num) => {
    const properties = []

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

function range(start, end, step = 1){
    return Array.from({length: Math.ceil((end - start) / step)}, (_, i) => start + (i * step));
}

const checkPrime = (num) => {
    num = parseInt(num); // change the number from a string to a number
    num += 1;

    // using the sieve of eratosthenes
    if(num === 2) return true

    // create an array 
    const is_prime = new Array(num).fill(true);     // this contains an array from the number 0 to the number n
    is_prime[0] = false;
    is_prime[1] = false;

    for(let x of range(2, Math.floor(Math.sqrt(num)))){
        if(is_prime[x]){
            for (let y of range(x * x, num, x)){
                is_prime[y] = false;
            }
        }
    }

    return is_prime[is_prime.length - 1];
}

const isPerfect = (num) => {
    num = parseInt(num);  // convert the string into a number

    let sum = 1;

    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0){
            sum += i;

            if(i !== num / i){
                sum += num / i;
            }
        }
    }

    return sum === num;
}

app.get('/api/classify-number', async (req, res) => {
    const number = req.query.number;
    const sum = sumOfDigits(number);
    const properties = returnProperties(number);
    const is_prime = checkPrime(number);
    const is_perfect = isPerfect(number);
    try {
        const data = await getFunFact();
        return res.status(200).json({ "number": number, "fun_fact": data, "sum_of_digits": sum, "properties": properties, "is_prime": is_prime, "is_perfect": is_perfect});
    }
    catch (err) {
        return res.status(500).json({
            "message": "Failed to get number facts"
        })
    }
})


// let the app listen on that port
app.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT}...`);
})