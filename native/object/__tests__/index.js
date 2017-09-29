import test from 'ava'
import '../assign'
import '../keys'

test('assign', t => {
  let testcase = ''
  t.deepEqual(Object.assign({}, testcase), Object._assign({}, testcase))
  testcase = {a: 1, b: 2}
  t.deepEqual(Object.assign({}, testcase),Object._assign({}, testcase))
  testcase = 'abc'
  t.deepEqual(Object.assign({}, testcase),Object._assign({}, testcase))
  testcase = 1
  t.deepEqual(Object.assign({}, testcase),Object._assign({}, testcase))
  testcase = undefined
  t.deepEqual(Object.assign({}, testcase),Object._assign({}, testcase))
  testcase = null
  t.deepEqual(Object.assign({}, testcase),Object._assign({}, testcase))
  testcase = false
  t.deepEqual(Object.assign({}, testcase),Object._assign({}, testcase))
  testcase = {a: 1, b: 2}
  let testcase1 = ['哈哈']
  let testcase2 = {c: 3, d: 4, a: 'kkk'}
  let testcase3 = {foo: {bar: 'bar', bar1: 'bar1'}}
  t.deepEqual(Object.assign({}, testcase, testcase1, testcase2, testcase3),
  Object._assign({}, testcase, testcase1, testcase2, testcase3))
})

test('keys', t => {
  let testcase = {a: 1, b: 2}
  t.deepEqual(Object.keys(testcase), Object._keys(testcase))
  testcase = [{a: 1, b: 2}]
  t.deepEqual(Object.keys(testcase), Object._keys(testcase))
  testcase = { 100: 'a', 2: 'b', 7: 'c'}
  t.deepEqual(Object.keys(testcase), Object._keys(testcase))
})
