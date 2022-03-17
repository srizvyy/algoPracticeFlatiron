// find first non-repeating character in a string 

const string = 'oh my god dude where is my car'
const int = '1234123'

// time complexity O(n)
// space complexity O(n) 

// use hashmap 

function firstNonRepeatingChar(str) {
    let obj = {}

    for (let elem of str) {
        obj[elem] = obj[elem] + 1 || 1
    }

    for (let elem in obj) {
        if (obj[elem] === 1) {
            return elem
        }
    }
    return -1
    
}

console.log(firstNonRepeatingChar(string))
console.log(firstNonRepeatingChar(int))



