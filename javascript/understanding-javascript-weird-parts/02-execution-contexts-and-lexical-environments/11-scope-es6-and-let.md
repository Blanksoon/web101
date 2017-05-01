# 11 Scope, ES6, and let

#### Scope

Where a variable is available in your code

And if it's truly the same variable, or a new copy

```javascript
if (true) {
  var a = 1
  let b = 2
}
console.log(a) // 1
console.log(b) // error
```

```javascript
// let create 10 variable each time in scope 0, 1, 2, 3, 4, 5 ....
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```