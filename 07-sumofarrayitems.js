/***
 * given an array of numbers return the addition of all numbers in array
 */

const numbers = [2, 3, 5, 1, 4, 5] //

const handleSum = () => {
	const sum = 0
	for (let n of numbers) {
		sum += n
	}
	return sum
}

console.log(handleSum(numbers))
