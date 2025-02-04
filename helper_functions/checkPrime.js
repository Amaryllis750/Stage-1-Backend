const checkPrime = (num) => {
    // convert the number from a string to number
    num = parseInt(num);

    if (num < 0) return false;

    // the sieve is designed to check for primes before the number num, therefore num won't be included
    // therefore, instead of the length of our array being of num length, it will be of num + 1 length
    if (num === 2) return true
    const array_length = num + 1;

    // create an array of num + 1 and then set everything to true
    const primes = Array(num + 1).fill(true);
    // set 0 and 1 to false, since they are not primes
    primes[0] = false;
    primes[1] = false;

    // start going through the rest of the array, start from 2 and end at the square root of the number n + 1
    for(let i = 2; i <= Math.sqrt(array_length); i++){
        // if the value at this index is true
        if(primes[i]){
            // start from the square of the index (an optimization technique)
            for(let j = i * i; j < array_length; j += i){
                primes[j] = false;
            }
        }
    }

    return primes[num];
}

module.exports = {checkPrime}