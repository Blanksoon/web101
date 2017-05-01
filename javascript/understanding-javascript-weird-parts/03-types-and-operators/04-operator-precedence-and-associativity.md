# 04 Operator precedence and associativity

#### Operator precedence

Which operator function gets called first

Functions are called in order of precedence (HIGHER precedence wins)

#### Associativity

What order operator functions get  in: left to right or right to left

When function have the same precedence

[MDN Operator precedence and Associativity](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

```javascript
2 + 1 + 8 * 5 // 43

var a = 2, b = 3, c = 7
a = b = c
// a, b, c = 7
```