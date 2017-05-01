# 01 Function Constructors, new, and the History of Javascript

#### Function constructors

A normal function that is used to construct object

The 'this' variable point a new empty object, and that object is returned from the function automatically

```javascript
// wrong way
function Person() {
  var firstname = 'nqmt'
}
var person = new Person() // Person {}

// true way
function Person() {
  this.firstname = 'nqmt'
}
var person = new Person() // Person {firstname: 'nqmt'}

// !! warnning
function Person() {
  this.firstname = 'nqmt'
  return {lastname: 'whyloop'}
}
var person = new Person() // Object {lastname: 'whyloop'}

```