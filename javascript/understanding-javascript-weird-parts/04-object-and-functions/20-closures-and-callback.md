# 20 Closures and Callback

#### Callback function is A function you give to another function, To be run when the other function is finished

```javascript
function laterSay() {
  var say = 'CODING COOL!'
  setTimeout(function() {
    console.log(say)
  }, 3000) // It's use callback()
}

laterSay()

function useCallback(callback) {
  var num = 0
  var count 10

  callback()
}

useCallback(function() {
  console.log('Im done')
})

uesCallback(function() {
  alert('Alert')
})
```