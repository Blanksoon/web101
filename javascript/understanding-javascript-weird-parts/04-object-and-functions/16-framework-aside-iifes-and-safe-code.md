# 16 Framework Aside IIFEs and Safe Code

#### Use IIFEs not effect global execution and another file library

```javascript
var greeting = 'say'

(function(global, name) {
  var greeting = 'Hi';
  global.greeting = 'Helo'
  console.log(greeting + ' ' + name)
  console.log(this) 
}(window, 'nqmt'))

console.log(greeting)
```

> :information_source: this and global is same thing