describe('normal function', () => {
  test('sum function', () => {
    expect(2 + 2).toBe(4)
  })

  test('multiple function', () => {
    expect(2 * 3).toBe(6)
  })
})

// for debug
// test.only('only !', () => {
//   expect(true).toBe(false)
// })
describe('only for debug jest', () => {
  test('this test will not run', () => {
    expect('A').toBe('A')
  })
})