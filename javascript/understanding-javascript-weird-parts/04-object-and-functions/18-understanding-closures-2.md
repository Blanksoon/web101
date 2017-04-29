# 18 Understanding Closures Part 2

#### Problem array is push function expression reference i same, because function expresion is initial is not excutetion

```javascript
function createArray() {
  var arr = []
  for (var i = 0; i < 6; i++) {
    arr.push(() => console.log(i))
  }
  return arr
}

var arr = createArray()
arr[0]() // 6
arr[1]() // 6
arr[2]() // 6
```
## Solution

#### IFFEs make own excution function

```javascript
function createArray() {
  var arr = []
  for (var i = 0; i < 6; i++) {
    arr.push((function(num) {
      return function() {
        console.log(num)
      }
    })(i))
  }
  return arr
}

var arr = createArray()
arr[0]() // 0
arr[1]() // 1
arr[2]() // 2
```
#### IFFEs ES6

```javascript
function createArray() {
  var arr = []
  for (var i = 0; i < 6; i++) {
    arr.push((num => {
      return () => console.log(num)
    })(i))
  }
  return arr
}

var arr = createArray()
arr[0]() // 0
arr[1]() // 1
arr[2]() // 2
```
#### ES6 It's make new value initial

```javascript
function createArray() {
  var arr = []
  for (let i = 0; i < 6; i++) {
    arr.push(() => console.log(i))
  }
  return arr
}

var arr = createArray()
arr[0]() // 0
arr[1]() // 1
arr[2]() // 2
```
