// only works if the array if sorted 
// https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470

function binarySearch(arr, num) {
    leftP = 0
    rightP = arr.length - 1 
    let mid;
    while (leftP <= rightP) {
        mid = Math.floor((rightP + leftP) / 2) 
        if (num === arr[mid]) {
            return mid
        }
        if (num < arr[mid]) {
            rightP = mid - 1 
        }
        else {
            leftP = mid + 1 
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 11))