const isPerfect = (num) => {
    num = parseInt(num);  // convert the string into a number
    // handling base cases...
    if (num <= 1) return false;  // negative numbers, 0 and 1 cannot be perfect.

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

module.exports = { isPerfect }