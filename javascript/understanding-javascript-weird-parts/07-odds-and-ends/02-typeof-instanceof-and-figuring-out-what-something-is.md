# 02 Typeof, Instanceof and Figuring out what something is

```javascript
var a = 3
var b = 'nqmt'
var c = {}
var d = []
var e = new Number(3)
var f = null
var g;

function Person(name) {
  this.name = name
}
var h = new Person('nqmt') 

console.log(typeof a) // number
console.log(typeof b) // string
console.log(typeof c) // object
console.log(typeof d) // object
console.log(Object.prototype.toString.call(d)) // [object Array]
console.log(typeof e) // object
console.log(typeof f) // object !! bug javascript
console.log(typeof g) // undefinded
console.log(typeof h) // object
console.log(h instanceof Person) // true
```