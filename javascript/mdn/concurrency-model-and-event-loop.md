# Concurrency model and Event loop

![Stack Queue Heap](img/stack-queue-heap.svg)

#### Stack

Stack for function calls

```javascript
function a() {
  console.log('a')
}

function b() {
  a()
  console.log('b')
}

b() // a b
```

#### Heap

Allocated anything

#### Queue

list message(function) to be processed when empty ***Stack***

#### Run to Complete

Run aysnc code not wait I/O, Don't take long process because It's lack and don't clickable

#### Add messages

add event or web api

#### Zero delays

```javascript
setTimeout(() => {
  console.log('nqmt')
}, 0)
```

Run Immediately but wait empty stack

#### Several runtime comunicating together

A web worker or a cross-origin (iframe) is two distinct runtime, Only communicate with postMessage()

#### Good Explanation Event loop
[Youtube JSConf](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=1s)
