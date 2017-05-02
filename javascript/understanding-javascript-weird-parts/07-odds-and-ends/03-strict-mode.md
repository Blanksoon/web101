# 03 Strict mode

#### Problem

```javascript
var person
person2 = 2
console.log(person2) // 2
```

#### Fix

```javascript
'use strict'
var person
person2 = 2
console.log(person2) // error
```