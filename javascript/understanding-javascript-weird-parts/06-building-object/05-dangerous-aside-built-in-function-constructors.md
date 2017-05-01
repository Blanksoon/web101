# 05 Dangerous aside built in function constructors

```javascript
var a = 3
var b = new Number(3) // Don't
var c = Number('3') // Can Do
a === b // false
a ===  // true
```