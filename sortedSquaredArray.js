// write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the sqaures of the original array, also sorted in the ascending order 

// [1,2,3,5,6,8,9] => [1,4,9,25,36,64,81]

function sortedSquaredArray(array) {
	let arr = []
  for (let i = 0; i < array.length; i++) {
		arr[i] = array[i] ** 2
	}
  return arr.sort((a, b) => {
    return a - b 
  });
}

// console.log(sortedSquaredArray([-2,-1]))
// console.log(sortedSquaredArray([1,2,3,4,5]))
