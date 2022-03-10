const array = [1,2,3,4,5,6,7]

function loop(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i+1])
    }
}

// console.log(loop(array))
// console.log(array)

function mapLoop(arr) {
    console.log(arr.map(arr => arr * 2))
}

// console.log(mapLoop(array))

function reverse(arr) {
    return arr.reverse()
}

// console.log(reverse(array))

function slice(arr) {
    return arr.slice()
}

// console.log(slice(array))

function filter(arr) {
    return arr.filter((arr) => arr % 2 === 0)
}

// console.log(filter(array))

function join(arr) {
    return arr.join('-')
}
// console.log(join(array))



