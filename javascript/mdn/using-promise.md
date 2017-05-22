# Using Promise

Essentially, a promise is a returned object you attach callbacks to, instead of passing callbacks into a function e.g. instead of a function taking two callbacks:

```javascript
doSomething(successCallback, failureCallback);
```

a promise you can attach your callbacks to instead

```javascript
doSomething().then(successCallback, failureCallback);
```

#### Chaining

old asynchronous

```javascript
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

promise chaining

```javascript
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

#### Error propagation

Promise [Look the .cath()]

```javascript
doSomething()
.then(result => doSomethingElse(value))
.then(newResult => doThirdThing(newResult))
.then(finalResult => console.log('Got the final result: ' + finalResult))
.catch(failureCallback);
```
Synchronous

```javascript
try {
  let result = syncDoSomething();
  let newResult = syncDoSomethingElse(result);
  let finalResult = syncDoThirdThing(newResult);
  console.log('Got the final result: ' + finalResult);
} catch(error) {
  failureCallback(error);
}
```

Async ES7

```javascript
async function foo() {
  try {
    let result = await doSomething();
    let newResult = await doSomethingElse(result);
    let finalResult = await doThirdThing(newResult);
    console.log('Got the final result: ' + finalResult);
  } catch(error) {
    failureCallback(error);
  }
}
```

#### Wrapping callback APIs

Cannot catch reject() in saySomething because setTimeout old function synchronous (not promise)

```javascript
setTimeout(() => saySomething("10 seconds passed"), 10000);
```

Wrapping settimeout

```javascript
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait(10000).then(() => saySomething("10 seconds passed")).catch(failureCallback);
```

Composition Promise

Promise.all() and Promise.race()

manual

```javascript
[func1, func2].reduce((p, f) => p.then(f), Promise.resolve());
```

actuly result

```javascript
Promise.resolve().then(func).then(func2);
```

#### Timing

Because push to event queue

```javascript
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

setTimeout undefined coercion to 0 so setTimeout(0) meaning run while stack is emtpy

```javascript
var wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```