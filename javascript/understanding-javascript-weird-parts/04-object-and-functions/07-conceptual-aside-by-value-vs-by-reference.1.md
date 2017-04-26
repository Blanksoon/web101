# 07 Conceptual Aside By Value Vs By Reference

#### By Value (All primitives)

```javascript
var a = 3
var b

b = a
a = 2

// a = 2
// b = 3
```

#### By Reference (All object)

```javascript
var a = { name: 'nqmt' }
var b

b = a
a.name = 'code'

// a.name = code
// b.name = code
```
> :exclamation: New create object not By Reference

> :information_source: Change object is mutable

> :information_source: Immutable value is not change

