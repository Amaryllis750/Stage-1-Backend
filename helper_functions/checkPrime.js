function range(start, end, step = 1){
    return Array.from({length: Math.ceil((end - start) / step)}, (_, i) => start + (i * step));
}

const checkPrime = (num) => {
    num = parseInt(num); // change the number from a string to a number
    if (num < 0) return false;  // negative numbers cannot be prime
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

module.exports = {checkPrime}