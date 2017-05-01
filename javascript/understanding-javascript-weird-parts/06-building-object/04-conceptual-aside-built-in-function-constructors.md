# 04 Conceptual aside built in function constructors

```javascript
// <Object>.prototype : see all method is provide

String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit
}

Number.prototype.isPositive = function() {
  return this > 0
}
```