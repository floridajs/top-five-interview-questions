/**
 * What is hoisting? 
 * - JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, 
 * -- variables or classes to the top of their scope, prior to execution of the code.
 * https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 */

// foo()
console.log(foo)

// function foo(){
//   console.log('hey guys whats up!')
// }

/**
 * let and cost do not hoist
 * declarations hoist
 * assignments do not hoist
 */

var foo = function () {
  console.log('hey peeps with foo')
}
