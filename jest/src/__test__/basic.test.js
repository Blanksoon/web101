import { sum } from '../sum'

// toBe() uses "==="
test('sum() 6 + 6', () => {
  expect(sum(6, 6)).toBe(12)
})

// toEqual() recursively checks every field of object or array
test('object assignment', () => {
  const obj = { firstname: 'nqmt', lastname: 'whyloop' }
  expect(obj).toEqual({ firstname: 'nqmt', lastname: 'whyloop' })
})

// toEqual() for array
test('array assignment', () => {
  const arr = [1, 2, 3, 4]
  expect(arr).toEqual([1, 2, 3, 4])
  expect(arr).toContain(3) // check a particular item
})

// Truthinees
test('null value', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero value', () => {
  const zero = 0
  expect(zero).not.toBeNull()
  expect(zero).toBeDefined()
  expect(zero).not.toBeUndefined()
  expect(zero).not.toBeTruthy()
  expect(zero).toBeFalsy()
})

// equivalents
test('equivalents', () => {
  const number = 6
  expect(number).toBeGreaterThan(3)
  expect(number).toBeGreaterThanOrEqual(6)
  expect(number).toBeLessThan(7)
  expect(number).toBeLessThanOrEqual(6)

  expect(number).toBe(6) // value
  expect(number).toEqual(6) // object
})

// Floating point toBeCloseTo
test('Floating point equality', () => {
  const decimal = 3.2
  expect(decimal).not.toBe(3.0)
  expect(decimal).toBeCloseTo(3.2)
})

test('string regular expression', () => {
  expect('team').not.toMatch(/I/)
  expect('Christoph').toMatch(/stop/)
  expect('Christoph').toMatch('stop')
})

// Exceptions
const throwError = () => { 
  throw new TypeError('Bug is alway')
}

test('Throw error', () => {
  expect(throwError).toThrow()
  expect(throwError).toThrow(TypeError)
  // check error mesage
  expect(throwError).toThrow('Bug is alway')
  expect(throwError).toThrow(/Bug/)
})