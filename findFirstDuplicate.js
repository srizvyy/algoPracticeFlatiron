// find first duplicate value 

// Input: [2, 1, 3, 3, 2] 
// Output: 3

// if no duplicate value is found return -1 


function firstDuplicate(arr) {
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] === arr[i + 1]) {
           return arr[i]
       } 
    }
    return -1
}

console.log(firstDuplicate([2, 1, 3, 2]))