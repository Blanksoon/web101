# 06 Function statements and function expressions

#### Expression

```javascript
a = 3
1 + 1
a === 3
```

#### Statements

```javascript
if (expression) {

}

switch (expression) {

}

// function statement
function(...parameters) {

}
```


#### Function Object (function is object)

```javascript
// function return a function object
let anonymousFunc = function() {
  console.log('Anonymouns')
}

// usage
anonymousFunc()

```

#### Beaware function object is assign ("=") undefinded

```javascript
anonymousFunc() // error

// anonymousFunc is not assign function as normal function
let anonymousFunc = function() {
  console.log('Anonymouns')
}

// right, because is normal function, it's save function in memory
sum(1, 2)

function sum(param1, param2) {
  return param1 + param2
}
```

#### Fist class function

```javascript
function getJSON(cb) {
  console.log('I am getJSON')
  cb()
}

getJSON(function() {
  console.log('I am Anonymouns')
})
```