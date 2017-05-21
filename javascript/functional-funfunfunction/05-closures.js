// funfunfunction code
var me = 'nqmt'

function greetMe() {
  console.log('Hi, ', me)
}

me = 'whyloop'

greetMe()


/* MDN javascript closures
 * Closures are remember the environment in thich they were created.
 * link:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 */

/* EXAMPLE 1 */
function init() {
  var name = 'javscript'
  function displayName() {
    console.log(name)
  }
  displayName()
}

init()


/* EXAMPLE 2 */
function makeFun() {
  var name = 'nqmt'
  function displayName() {
    console.log(name)
  }
  return displayName
}

var myFun = makeFun()
myFun()

/* EXAMPLE 3 */
function makeAdder(x) {
  return function(y) {
    return x + y
  }
}

var add5 = makeAdder(5)
var add10 = makeAdder(10)

console.log(add5(2))
console.log(add10(2))

/* EXAMPLE 4 */
in 05-closures-1.html

/* EXAMPLE 5 
 * This is use Anonymous Closures, Excute immediately, privacy variable and function
 * Emulating private
 */
var counter = (function() {
  var privateCounter = 0
  function changeBy(val) {
    privateCounter += val
  }
  return {
    increment: () => changeBy(1),
    decrement: () => changeBy(-1),
    value: () => privateCounter
  }
})()

console.log(counter.value()) // logs 0
counter.increment()
counter.increment()
console.log(counter.value()) // logs 2
counter.decrement()
console.log(counter.value()) // logs 1

/* private variable */
console.log(counter.privateCounter) // undefined
// console.log(counter.changeBy(1)) // error

/* EXAMPLE 6 */
/* Separate function in MakeCounter use it several time */
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value()); /* Alerts 0 */

/* EXAMPLE 7 */
// in 05-closures-2.html

/* EXAMPLE 8 */
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
// whenever the constructor is called, the methods would get reassigned. Not good

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};
// Should sparate prototype

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};
// good

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    this.getMessage = function() {
        return this.message;
    };
}).call(MyObject.prototype);
// best clean