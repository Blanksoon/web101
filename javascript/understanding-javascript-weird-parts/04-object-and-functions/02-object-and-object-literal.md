# 02 Object and object literal

#### Object literal

```javascript
var obj = {
  firstname: 'nqmt',
  lastname: 'whyloop',
  address: {
    country: 'Thailand'
  }
}

function log(person) {
  console.log('hi ' + person.firstname)
}

// object literal on the fly
log({
  firstname: 'on the fly',
  lastname: 'whyloop'
})
```