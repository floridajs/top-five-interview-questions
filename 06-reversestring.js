/* ---- Directions
  Given a string, return a new string with the reversed
  order of characters
--- Examples
  reverse('apple') === 'elppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
*/

// define apple string
// .reverse method
// immutability of strings = convert to array
// split, reverse, join
// for loop - starting from the end (split, reverse)

/*--------------------------------------------
 * 1. Split, reverse, join
 */

function reserveString(str) {
	// const arr = str.reverse() // not available for strings only for arrays
	const splitStr = str.split('')
	const reversedArray = splitStr.reverse()
	const reversedStrArray = reversedArray.join('')

	return reversedStrArray
}

const reserveStringOneLine = str => str.split('').reverse().join('')

// console.log(reserveString('Apple')) // leppA
// reserveString('Jonathan') // nahtanoJ
// console.log(reserveStringOneLine('jonathan'))

/*--------------------------------------------
 * 2. with for loop
 */

const reverseStringWithForLoop = str => {
	let reversedStr = ''

	for (let i = 1; i <= str.length; i++) {
		// reversedStr = str[i] + reversedStr // 'elppA'
		reversedStr += str.at(-i) // 'elppA'
		// reversedStr = reversedStr + str.at(-i) // 'elppA'
	}

	// for (let character of str) reversedStr = character + reversedStr
	return reversedStr
}

// console.log(reverseStringWithForLoop('Javascript'))

/*--------------------------------------------
 * 3. with recursion
 */

const reverseWithRecursion = str => {
	if (str === '') return '' // this is the terminal case that will end the recursion
	else return reverseWithRecursion(str.substring(1)) + str.charAt(0) // str[0]
}

// console.log(reverseWithRecursion('Apple'))

/*--------------------------------------------
 * 4. with Reduce
 */

const reverseWithReduce = str => {
	// const reverseWithReduce = str => str.split('').reduce((accumulator, character) => character + accumulator, '') // oneline
	return str.split('').reduce((accumulator, character) => {
		return character + accumulator
	}, '')
}

console.log(reverseWithReduce('Apple'))
