# 07 Object create and Pure prototypal inheritance

#### Object create

```javascript
var person = {
  firstname: 'default',
  lastname: 'default'
  getName: function() {
    return this.firstname + ' ' + this.lastname
  }
}

var nqmt = Object.create(person)
// Object
//   noting
//   __proto__
//     firstname: 'nqmt'
//     lastname: 'whyloop'
//     getName: function ()
console.log(nqmt.getName()) // 'default default'
nqmt.firstname = 'nqmt'
nqmt.lastname = 'whyloop'
console.log(nqmt.getName()) // 'nqmt whyloop'
```

##### Polyfill

code that add a feature which the engine may lack.

```javascript
// use for older browser
if (!Object.create) {
  Object.create = function(0) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation' + ' only accepts the first parameter')
    }
    function F() {}
    F.prototype = o
    return new F()
  }
}
```