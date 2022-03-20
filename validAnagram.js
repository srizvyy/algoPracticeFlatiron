function ValidAnagram(strOne, strTwo) {
    if (strOne.length !== strTwo.length) {
        return false 
    }

    str1 = strOne.split('').sort().join('')
    str2 = strTwo.split('').sort().join('')

    if (str1 === str2) {
        return true
    }
}

console.log(ValidAnagram('danger', 'garde'))