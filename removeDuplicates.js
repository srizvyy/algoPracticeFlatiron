// remove duplicates values from an array 

// iterative way 
function removeDuplicates(array) {
    let arr = []

    for (let i = 0; i < array.length; i++) {
        if (!arr.includes(array[i])) {
            arr.push(array[i])
        }
    }
    return arr 
}


function removeDuplicatesWithSet(array) {
    return [...new Set(array)]
}
console.log(removeDuplicatesWithSet([1,2,3,4,4,5,6,6]))