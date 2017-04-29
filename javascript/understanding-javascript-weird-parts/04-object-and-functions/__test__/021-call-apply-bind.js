var person = {
  firstname: 'nqmt',
  lastname: 'whyloop',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname
  }
}

// example 1
// var log = function(a, b) {
//   console.log('Logged: ' + this.getFullName())
//   console.log('Arguments: ' + a + ' ' + b)
//   console.log('====================')
// }.bind(person)

// log('argument1', 'argument2')

// example 2
// var log = function(a, b) {
//   console.log('Logged: ' + this.getFullName())
//   console.log('Arguments: ' + a + ' ' + b)
//   console.log('====================')
// }

// var logPerson = log.bind(person)

// logPerson('test', 'test')


//example 3
// log.call(person, 'argument1', 'argument2')
// log.apply(person, ['argument1', 'argument2'])

//example 4

// var borrow = {
//   firstname: 'nqmt',
//   lastname: 'programmer'
// }

// console.log(person.getFullName.apply(borrow))

//example 5 currying set some preset

// function mutiply(a, b) {
//   return a * b
// }

// var multiplyTwo = mutiply.bind(this, 2)
// console.log(multiplyTwo(8)) // 16

// var multiplyThree = mutiply.bind(this, 3)
// console.log(multiplyThree(8)) // 24
