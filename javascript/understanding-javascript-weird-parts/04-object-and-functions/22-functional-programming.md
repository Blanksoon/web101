# 22 Functional Programming

#### Functional Programming is take function pass other function to take logic and get new value (immutable)

```javascript
var arr = [1, 2, 3, 4, 5]

function map(arr, func) {
  var newArr = []
  var length = arr.length
  for (var i = 0; i < length; i++) {
    newArr[i] = func(arr[i])
  }
  return newArr
}

// function take your own logic
var mutipleTwo = map(arr, function(num) {
  return num * 2
})

var mutipleThree = map(arr, function(num) {
  return num * 3
})
```
#### Combine curry concept

```javascript
var limiter = function(limit, item) {
  return item <= limit ? item : false
}
var limitOne = map(arr, limiter.bind(this, 1))
```
#### Combine curry concept (Another way)

```javascript
var limiter = function(limit, item) {
  return item <= limit ? item : false
}.bind(this, 2)
var limitTwo = map(arr, limiter)
```

#### Combime Closure and Curry concept

```javascript
var limiter = function make(limit) {
  return function usage(limit, item) {
    return item <= limit ? item : false
  }.bind(this, limit)
}
var limitThree = map(arr, limiter(3))
```
> :exclamation: if usage function not bind it's error because function expression cannot match limit(make) to limit(usage), wherefore while use in map function It's use two parameter in map function