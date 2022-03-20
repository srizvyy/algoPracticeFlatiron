// reverse an array without using the reverse method 

function ReverseArr(arr) {
    let array = []

    for (let i = arr.length -1; i >= 0; i--) {
        array += arr[i]
    }
    return array
}

console.log(ReverseArr([1,2,3,4,5]))