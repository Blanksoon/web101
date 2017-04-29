# 23 Functional programming

```javascript
var _ = require('./underscore')
var arr = [1, 2, 3, 4, 5, 6, 7]

var mutipleTwo = _.map(arr, function(item) {
  return item * 2
})

var filter = _.filter(arr, function(item) {
  return item % 2 === 0
})