/***
 * What are CallBacks? 
 * - A callback function is a function passed into another function as an argument, 
 * which is then invoked inside the outer function to complete some kind of routine or action.
 * https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

function getNumber(cb) {
  setTimeout(() => {
    cb(7889)
  }, 1000)
}

// getNumber(n => console.log(n))

/****
 * Promises
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

function getNumberPromise() {
  return new Promise((resolve, reject) => {
    console.log('resolve ->', resolve)
    // getNumber(resolve)
    resolve(890) // .then success
    reject('Huston we got a problem') // .catch error
  })
}

const promise = getNumberPromise()
promise.then(n => console.log(n)).catch(err => console.error('this is the error -> ', err))
