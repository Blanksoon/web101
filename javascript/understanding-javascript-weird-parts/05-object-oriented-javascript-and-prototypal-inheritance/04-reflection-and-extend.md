# 04 Reflection and extend

```javascript
var nqmt = {
  firstname: 'nqmt',
  lastname: 'whyloop',
  getFullName: function() {
    console.log(this.firstname + ' ' + this.lastname)
  }
}

var john = {
  firstname: 'jonh',
}

// Don't do this __proto__, It's for explain
john.__proto__ = nqmt
```

```javascript
for (var prop in nqmt) {
  if (nqmt.hasOwnProperty(prop)) {
    console.log(prop + ': ' + nqmt[prop])
  }
}
```

```javascript
var _ = require('./underscore')

var nqmt = {
  firstname: 'nqmt',
  lastname: 'whyloop'
}

var address = {
  firstname: 'changename',
  address: 'thailand'
}

var utils = {
  getFirstname: function() {
    return this.firstname
  },
  getLastname: function() {
    return this.lastname
  },
  getAddress: function() {
    return this.address
  },
  getFullDetail: function() {
    return this.firstname + ' ' + this.lastname + ' ' + this.address
  } 
}

var compose = _.extend(nqmt, address, utils)

console.log(compose.getFullDetail())
```