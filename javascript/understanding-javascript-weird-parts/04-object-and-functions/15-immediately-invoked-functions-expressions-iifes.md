# 15 Immediately Invoked Functions Expressions IIFEs

#### Expression on the fly

```javascript
1 + 1 // correct

'string' // correct

// error, function statement must have a name 
function(name) {
  var say = 'Hi'
  console.log(say + ' ' + name)
}
```
#### It's function expression. not function statement 

```javascript
(function(name) {
  var say = 'Hi'
  console.log(say + ' ' + name)
})
```
> :information_source: inside () is expression

#### Immediately invoked functions expression (IIFES)

```javascript
(function(name) {
  var say = 'Hi'
  console.log(say + ' ' + name)
}('nqmt'))
```
