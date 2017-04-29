# 21 Call, Apply, and Bind

##### * Bind : (Create function) is bind 'this' to your function
##### * Call : (Immediately excute) is bind 'this' to your function with parameter
##### * Apply : (Immediately excute) is bind 'this' to your function with array parameter

##### Base object

```javascript
var person = {
  firstname: 'nqmt',
  lastname: 'whyloop',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname
  }
}
```
#### Bind 'this' on the fly function

```javascript
var log = function(a, b) {
  console.log('Logged: ' + this.getFullName())
  console.log('Arguments: ' + a + ' ' + b)
  console.log('====================')
}.bind(person)
log('argument1', 'argument2')
```

#### Bind 'this' to function (create) to logPerson

```javascript
var log = function(a, b) {
  console.log('Logged: ' + this.getFullName())
  console.log('Arguments: ' + a + ' ' + b)
  console.log('====================')
}
var logPerson = log.bind(person)
logPerson('argument1', 'argument2')
```
#### Call and Apply (Immediately excute)

```javascript
log.call(person, 'argument1', 'argument2')
log.apply(person, ['argument1', 'argument2'])
```
#### Person use borrow object to change firstname and lastname

```javascript
var borrow = {
  firstname: 'nqmt',
  lastname: 'programmer'
}
console.log(person.getFullName.apply(borrow))
```
#### Currying is set for some preset

```javascript
function mutiply(a, b) {
  return a * b
}

var multiplyTwo = mutiply.bind(this, 2)
console.log(multiplyTwo(8)) // 16

var multiplyThree = mutiply.bind(this, 3)
console.log(multiplyThree(8)) // 24
```