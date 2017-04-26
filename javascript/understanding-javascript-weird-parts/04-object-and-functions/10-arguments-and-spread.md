# Arguments and Spread

#### Arguments

```javascript
function person(firstname, lastname) {
  if (arguments.length === 2) {
    console.log(firstname, lastname)
    return
  }
  console.log('not complete')
}
```

#### Defualt value argument

```javascript
// old
function person(firstname) {
  firstname = firstname || 'not value'
}

// ES6
function person(firstname = 'not value') {
}
```

#### Spread

```javascript
function person(firstname, lastname, ...param) {
  console.log(firstname)
  console.log(param) // array other arguments
  console.log(param[0]) // usage
}

person('nqmt', 'whyloop', '054894562', 'nqmt@whyloop.com')
// answer
// nqmt whyloop
// ['054894562', 'nqmt@whyloop.com']
// 054894562
```
