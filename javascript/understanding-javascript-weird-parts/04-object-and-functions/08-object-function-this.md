# 08 Object, Function, this

#### :exclamation: Issue function and this

this, in function is window object (global executetion)

this, in object, method(function in object) is reference property object

:exclamation: function inside method is window object

```javascript
console.log(this) // window object

function sometime() {
  console.log(this) // window object
}

var sometime = {
  name: 'nqmt',
  call: function() {
    this.name = 'nqmts'  // is reference object property
    
    var setName = function(newName) {
      this.name = newName // window object
    }
    setName('Boom!!!')
  }
}
```

#### Fix It.

```javascript
var sometime = {
  name: 'nqmt',
  call: function() {
    var self = this // variable hold object property use for function inside method
    self.name = 'nqmts'  // is reference object property
    
    var setName = function(newName) {
      self.name = newName // is reference object property
    }
    setName('Yeah Cool man!!!')
  }
}

```