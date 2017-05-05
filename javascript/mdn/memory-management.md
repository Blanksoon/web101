# Memory management

low level like c, malloc() and free() by garbage collection.

#### Memory life cycle

1 Allocate the memory
2 Use the allocate memory(read, write)
3 Release the allocated memory when it's not use anymore

Value initialization

```javascript
var n = 123; // allocates memory for a number
var s = 'azerty'; // allocates memory for a string 

var o = {
  a: 1,
  b: null
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and 
// contained values
var a = [1, null, 'abra']; 

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener('click', function() {
  someElement.style.backgroundColor = 'blue';
}, false);
```

Allowcation via function calls

```javascript
var d = new Date(); // allocates a Date object
var e = document.createElement('div'); // allocates a DOM element
```

Some methods allocate new value or object

```javascript
var s = 'azerty';
var s2 = s.substr(0, 3); // s2 is a new string
// Since strings are immutable value, 
// JavaScript may decide to not allocate memory, 
// but just store the [0, 3] range.
var a = ['ouais ouais', 'nan nan'];
var a2 = ['generation', 'nan nan'];
var a3 = a.concat(a2); 
// new array with 4 elements being
// the concatenation of a and a2 elements
```

#### Garbage collection (old)

"an object has zero reference" [***Not Delete before last line***]  [***Delete last line***]

Example 1

```javascript
var o = { 
  a: {
    b: 2
  }
}; 
// 2 objects are created. One is referenced by the other as one of its properties.
// The other is referenced by virtue of being assigned to the 'o' variable.
// Obviously, none can be garbage-collected


var o2 = o; // the 'o2' variable is the second thing that 
            // has a reference to the object
o = 1;      // now, the object that was originally in 'o' has a unique reference
            // embodied by the 'o2' variable

var oa = o2.a; // reference to 'a' property of the object.
               // This object has now 2 references: one as a property, 
               // the other as the 'oa' variable

o2 = 'yo'; // The object that was originally in 'o' has now zero
           // references to it. It can be garbage-collected.
           // However what was its 'a' property is still referenced by 
           // the 'oa' variable, so it cannot be freed
           // object isn't delete

oa = null; // what was the 'a' property of the object originally in o 
           // has zero references to it. It can be garbage collected.
```

Limitation: cycles (Not use) [***Not Delete***]

```javascript
function f() {
  var o = {};
  var o2 = {};
  o.a = o2; // o references o2
  o2.a = o; // o2 references o

  return 'azerty';
}
f();
```

Real-life (Reference own object) [***Not Delete***]

```javascript
var div;
window.onload = function() {
  div = document.getElementById('myDivElement');
  div.circularReference = div;
  div.lotsOfData = new Array(10000).join('*');
};
```

#### Mark-and-sweep algorithm (New)

"an object is unreachable by root (Object)"

***if*** Example before last line [***Not Delete***, It's Reference]

***if*** Limitation: cycles [***Delete***, not Reference in root(Object)]

***if*** Real-life [***Delete***, not Reference in root(Object) but Reference own]