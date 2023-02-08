/***
 * What is Closures? 
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 */


let x = 1000 // global scope

// function logxForMe() {
//   console.log(x) // inside function scope
// }

// logxForMe()

function myAddFunction(x) {
  return function (y) {
    return x + y
  }
}

const addMore = myAddFunction(5)

// window.console.log(addMore(45))
// Closures feature of javascript that gives function access to reference in the outside scope.

 const test = () => {
  console.log('test')
}

module.exports = test
console.log(module)