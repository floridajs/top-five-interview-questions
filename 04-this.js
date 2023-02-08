/**
 * This reserved keyword in Javascript?
 * - The value of this is determined by how a function is called (runtime binding).
 * - It can't be set by assignment during execution, and it may be different each time the function is called.
 * - Arrow functions don't provide their own this binding
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

const person = {
  name: 'Jon',
  car: 'GMC',
  sayName: function () {
    console.log(this.name, this.car)
  },
}

// person.sayName() // this works
const localSayName = person.sayName
// localSayName()  // this does not because this has lost its runtime binding

const boundSayName = person.sayName.bind(person)
boundSayName()
