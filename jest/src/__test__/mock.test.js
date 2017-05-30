// .mock.calls
test('Mock call function', () => {
  const myMock = jest.fn()
  myMock(1) // store in mock call (one argument)
  myMock('a', 'b') // store in mock call (two argument)

  expect(myMock.mock.calls).toEqual([[1], ['a', 'b']])
})

// .mock.instances
test('Mock instances object or bind', () => {
  const myMock = jest.fn()
  const a = new myMock() // store in mock instances
  const b = {}
  const bound = myMock.bind(b)
  bound() // store in mock instances

  expect(myMock.mock.instances).toEqual([{}, {}])
})

// Mix calls and instances
test('Mix calls and instances', () => {
  const myMock = jest.fn()
  myMock('call1', 'call2', 'call3')
  const a = new myMock()
  const b = new myMock('instance1')
  const c = new myMock('instance2')
  const d = {}
  const e = myMock.bind(d)
  e()
  const f = myMock.bind(a)
  f('bind data')
  
  // .mock.calls
  expect(myMock.mock.calls).toEqual([["call1", "call2", "call3"], [], ["instance1"], ["instance2"], [], ["bind data"]])
  expect(myMock.mock.calls.length).toBe(6)
  expect(myMock.mock.calls[0]).toEqual(["call1", "call2", "call3"])
  expect(myMock.mock.calls[1]).toEqual([])
  expect(myMock.mock.calls[2]).toEqual(["instance1"])
  expect(myMock.mock.calls[3]).toEqual(["instance2"])
  expect(myMock.mock.calls[4]).toEqual([])
  expect(myMock.mock.calls[5]).toEqual(["bind data"])

  // .mock.instances
  expect(myMock.mock.instances).toEqual([undefined, {}, {}, {}, {}, {}])
  expect(myMock.mock.instances.length).toBe(6)
  expect(myMock.mock.instances[0]).toBe(undefined)
  expect(myMock.mock.instances[0]).toBeUndefined()
  expect(myMock.mock.instances[1]).toEqual({})
  expect(myMock.mock.instances[2]).toEqual({})
  expect(myMock.mock.instances[3]).toEqual({})
  expect(myMock.mock.instances[4]).toEqual({})
  expect(myMock.mock.instances[5]).toEqual({})
})

// Mock return values
test('Mock return value', () => {
  const myMock = jest.fn()
  expect(myMock()).toBeUndefined()

  myMock
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(3)
  
  expect(myMock()).toBe(1)
  expect(myMock()).toBe(2)
  expect(myMock()).toBe(3)
})

// functional continuation-passing style
test('Functional continuation passing', () => {
  const filterTestFn = jest.fn()
  filterTestFn
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
  const result = [11, 22].filter(filterTestFn)
  
  expect(result).toEqual([11])
})

// Mock Implementations
test('Mock implementations', () => {
  const myMockFn = jest.fn(cb => cb(null, true))
  expect(myMockFn((err, val) => val)).toBe(true)
  expect(myMockFn((err, val) => val)).toBeTruthy()
})

// Mock another function
jest.mock('../sum')
import { sum } from '../sum'

test('Mock another function', () => {
  sum.mockImplementation(() => 6)
  expect(sum()).toBe(6)
})

// Mock multiple function calls
test('Mock nultiple function calls', () => {
  const myMockFn = jest.fn()
  myMockFn
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false))
  
  expect(myMockFn((err, val) => val)).toBeTruthy()
  expect(myMockFn((err, val) => val)).toBeFalsy()
})

// Mock default and implementation
test('Mock default & implementation', () => {
  const myMockFn = jest.fn(() => 'default')
  myMockFn
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'Second call')
  
  expect(myMockFn()).toBe('first call')
  expect(myMockFn()).toBe('Second call')
  expect(myMockFn()).toBe('default')
})

// Mock Matchers
test('Mock Matchers', () => {
  const myMockFn1 = jest.fn()
  const myMockFn2 = jest.fn()

  expect(myMockFn1).not.toBeCalled()
  myMockFn2('a', 'b')
  myMockFn2('c')
  myMockFn2('d', 'e')
  expect(myMockFn2).toBeCalled()
  expect(myMockFn2).toBeCalledWith('a', 'b') // first
  expect(myMockFn2).lastCalledWith('d', 'e') // last
})