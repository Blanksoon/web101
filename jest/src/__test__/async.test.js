const async = (cb) => {
  setTimeout(() => {
    cb('This\'s callback function')
  }, 3000)
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This\'s promise function')
  }, 3000)
})

// Not work
test('async function form', () => {
  const callbackTest = (data) => {
    expect(data).toBe('This\'s callback functions');
    done();
  }
  async(callbackTest)
})

test('promise function form', () => {
  expect.assertions(1)
  return promise.then(data => {
    expect(data).toBe('This\'s promise function')
  })
})

test('promise function short form', () => {
  expect.assertions(1)
  return expect(promise).resolves.toMatch('promise')
})