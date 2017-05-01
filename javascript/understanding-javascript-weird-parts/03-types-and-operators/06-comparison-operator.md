# 06 Comparison operator

```javascript
1 < 2 < 3 // true
true < 3
1 < 3 // true

3 < 2 < 1 // !! true
false < 1
0 < 1 // true

// Coercion
Number('1') // 1
Number('a') // NaN
Number(undefinded) // NaN
Number(true) // 1
Number(false) // 0
Number(null) // 0

// Problem
0 == null // !! false
0 == false // true
0 == '' // true

// Fix use '===' all time
0 === false // false
0 === '' // false
```

[Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)