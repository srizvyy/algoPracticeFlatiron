// time complexity = O(n^2)
// space complexity = O(n)
function fibonacci(n) {
   if (n == 1) {
       return 0
   }
   else if (n == 2) {
       return 1
   }
   else {
       return fibonacci(n-1) + fibonacci(n-2)
   }
}

// console.log(fibonacci(6))


// time complexity = O(n)
// space complexity = O(n)
function fibonacciMemoize(n) {
    memoize = {1: 0, 2: 1}
    if (n in memoize) {
        return memoize[n]
    }
    else {
        memoize[n] = fibonacci(n-1) + fibonacci(n-2)
        return memoize[n]
    }
}

// console.log(fibonacciMemoize(6))

function fibonacciIterate(n) {
    const arr = [0,1]
    

    for (let i = 2; i <= n; i++ ) {
        arr[i] = arr[i-2] + arr[i-1]
    }
    return arr[n]
}

console.log(fibonacciIterate(6))