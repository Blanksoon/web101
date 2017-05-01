# 06 Dangerous aside arrays and for in

If you add prototype in Array and If you for in It's take to you prototype !! warning

```javascript
Array.prototype.myVar = 'warnning'
var arr = ['nqmt', 'folk', 'sun']

// Don't
for (var prop in arr) {
  console.log(prop + ': ' + arr[prop])
}

// Do
for (var i = 0; i < length; i++) {
  console.log(prop + ': ' + arr[prop])
}

```