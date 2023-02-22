/***
 * given an array of numbers return the addition of all numbers in array
 */

const numbers = [2, 3, 5, 1, 4, 5] //

/***
 * with For loop
 */
const handleSum = () => {
	let sum = 0
	for (let n of numbers) {
		sum += n
	}
	return sum
}

// console.log(handleSum(numbers))

/***
 * with reduce
 */

const handleSumWithReduce = arr => {
	// acc = 0, current = 2 => 0 + 2 = acc 2
	// acc = 2, current = 3 => 2 + 3 = acc 5
	// acc = 5, current = 5 => 5 + 5 = acc 10
	// acc = 10, current = 1 => 10 + 1 = acc 11
	// acc = 11, current = 4 => 11 + 4 = acc 15
	// acc = 15, current = 5 => 15 + 5 = acc 20
	const sumofitems = arr.reduce((accumulator, current) => {
		return accumulator + current
	})

	return sumofitems
}

console.log(handleSumWithReduce(numbers))
