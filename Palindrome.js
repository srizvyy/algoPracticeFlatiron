const string = 'the quick brown fox'
const string1 = 'Oozy rat in a sanitary zoo'

function palindrome(str) {
    let newStr = str.toLowerCase().replace(/ /g, '')
    let reversedStr = newStr.split('').reverse().join('')
    if (newStr === reversedStr) {
        return true 
    }
    else {
        return false 
    }
    
}

console.log(palindrome(string))