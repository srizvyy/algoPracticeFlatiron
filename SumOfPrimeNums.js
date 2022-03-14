function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false 
        } 
    }
    return true 
}

// console.log(isPrime(2))
// console.log(isPrime(10))
// console.log(isPrime(19))
// console.log(isPrime(17))
// console.log(isPrime(23))
// console.log(isPrime(29))
// console.log(isPrime(37))

function sumOfPrimes(num) {
    result = 0
    for (let i = 2; i < num; i++) {
        if (isPrime(i)) {
            result += i 
        }
    }
    return result 
}

// console.log(sumOfPrimes(7))

