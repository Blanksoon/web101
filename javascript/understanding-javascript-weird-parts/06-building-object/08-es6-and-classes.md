# 08 ES6 and Classes

```javascript
// Is Object not same in other programming language
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }
  greet() {
    return 'Person Call ' + firstname
  }
}

// Person
//   firstname
//   lastname
//   __proto__
//       greet()

class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname)
  }
  greets() {
    return 'InformalPerson' + lastname
  }
}

// InformalPerson
//   firstname
//   lastname
//   __proto__
//       greets()
//       __proto__
//          greet()


var nqmt = new Person('nqmt', 'whyloop')
var nqmt = new InformalPerson('nqmt', 'whyloop')
```