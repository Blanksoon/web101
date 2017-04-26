# 09 Conceptual aside array collections of anything

#### Array in javascript can store anything

```javascript
var arr = new Array()

// or array literal form
var arr = [
  1,
  true,
  'string',
  {name: 'nqmt'},
  function(text) {
    console.log(text)
    console.log(this) // window object
  }
]

// access array

arr[0] // 1
arr[3].name // 'nqmt'
arr[4]('Push text in function') // Push text in function


```