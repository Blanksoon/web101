// console.log(a)

// var a = 'j'

// function test() {
//   // console.log(a)
//   console.log(b)
//   var b = '2'
// }

// test()

// function b() {
//   var my;
//   console.log(my)
// }

// function a() {
//   console.log(my)
//   var my = 2
//   b()
// }

// var my = 1
// console.log(my)
// a()

// if (true) {
//   var a = 1
//   let b = 2
// }
// console.log(a)
// console.log(b)


function wait() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finish wait')
}

function clickHandler() {
  console.log('click')
}

document.addEventListener('click', clickHandler)

wait()
console.log('end')