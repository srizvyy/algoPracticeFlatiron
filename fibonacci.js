function fibonacci(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i] + arr[i-1] 
        return array.push(sum)
    }
    return array
}

console.log(fibonacci([1,2,3,4,5], 2))