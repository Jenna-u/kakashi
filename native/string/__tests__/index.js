import test from 'ava'
import '../includes'
import '../repeat'
import '../search'
import '../split'
import '../substr'

test('includes', t => {
  let testcase = 'test'
  t.deepEqual(testcase.includes('h', 0), testcase._includes('h', 0))
  t.deepEqual(testcase.includes('{}', -1), testcase._includes('{}', -1))
  t.deepEqual(testcase.includes({}), testcase._includes({}, ))
  t.deepEqual(testcase.includes(null, 3), testcase._includes(null, 3))
  t.deepEqual(testcase.includes(undefined), testcase._includes(undefined))
  // t.deepEqual(testcase.includes([]), testcase._includes([]))
})

test('repeat', t => {
  let testcase = 'test'
  // t.deepEqual(testcase.repeat(-1), testcase._repeat(-1))
  t.deepEqual(testcase.repeat(1), testcase._repeat(1))
  t.deepEqual(testcase.repeat(2), testcase._repeat(2))
  t.deepEqual(testcase.repeat(3), testcase._repeat(3))
  t.deepEqual(testcase.repeat(4), testcase._repeat(4))
  t.deepEqual(testcase.repeat(100), testcase._repeat(100))
})

test('search', t => {
  let testcase = 'test'
  t.deepEqual(testcase.search('a'), testcase._search('a'))
  t.deepEqual(testcase.search('t'), testcase._search('t'))
  t.deepEqual(testcase.search('e'), testcase._search('e'))
  t.deepEqual(testcase.search('s'), testcase._search('s'))
  t.deepEqual(testcase.search(/t/gi), testcase._search(/t/gi))
})

test('split', t => {
  let testcase = 'hello world how are you doing'
  t.deepEqual(testcase.split(' '), testcase._split(' '))
  t.deepEqual(testcase.split('a'), testcase._split('a'))
  t.deepEqual(testcase.split('o'), testcase._split('o'))
})

test('substr', t => {
  let testcase = 'abcdefghijklmn'
  t.deepEqual(testcase.substr(0), testcase._substr(0))
  t.deepEqual(testcase.substr(4), testcase._substr(4))
  t.deepEqual(testcase.substr(1, 2), testcase._substr(1, 2))
  t.deepEqual(testcase.substr(-1, -2), testcase._substr(-1, -2))
  t.deepEqual(testcase.substr(-20, 2), testcase._substr(-20, 2))
  t.deepEqual(testcase.substr(-12, 4), testcase._substr(-12, 4))
})
