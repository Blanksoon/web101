# 08 Default values

```javascript
// example 1
function greet(name) {
  console.log('Hello ' + name)
}
greet() // Hello undefinded : String(undefinded) -> "undefinded"

// example 2 Default value old
function greet(name) {
  name = name || 'Default'
  console.log('Hello ' + name)
}
greet() // Hello Default
greet(0) // !! exception: Hello Default

// example 3 Default value ES6
function greet(name = 'Default') {
  console.log('Hello ' + name)
}
greet() // Hello Default
greet(0) // Hello 0
```