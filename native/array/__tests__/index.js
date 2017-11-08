import test from 'ava'
import '../is_array'
import '../copy_within'
import '../concat'
import '../every'
import '../fill'
import '../find'
import '../includes'
import '../join'
import '../reduce'
import '../push'
import '../reverse'
import '../some'
import '../unshift'
import '../slice'
import '../splice'

function testArrayMethod(t, array, name) {
	return function () {
		let arr1 = array
		let arr2 = array
		if (typeof array === 'undefined') {
			arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
			arr2 = arr1.slice(0)
		}
		const origin = arr1[name].apply(arr1, arguments)
		const target = arr2[`_${name}`].apply(arr2, arguments)
		t.deepEqual(origin, target)
		t.deepEqual(Object.keys(origin), Object.keys(target))
		return [origin, target]
	}
}

test('copyWithin', t => {
	const testCopyWithin = testArrayMethod(t, undefined, 'copyWithin')
	testCopyWithin(2)
	testCopyWithin(3, 2, 3)
	testCopyWithin(-3)
	testCopyWithin(2, -3)
	testCopyWithin(-3, -5, 10)
	testCopyWithin(-100)
	testCopyWithin(-100, -100, 100)
	testCopyWithin(2, 3, -1)
	testCopyWithin('dfsdfdf')
});


test('concat', t => {
	const testConcat = testArrayMethod(t, [1, 2, 3, 4], 'concat')
	testConcat([5, 6, 7])
	testConcat([5, 6, 7], [5, 3])
	testConcat([])
	testConcat([], 1, {})
	testConcat()
	testConcat(1)
	testConcat(arguments)
});

test('concat', t => {
	const testEvery = testArrayMethod(t, undefined, 'every');
	function isMax(ele) { return ele > 0 }
	testEvery(isMax)
	function isSame(ele) { return ele === ele }
	testEvery(isSame)
	function isSmall(ele) { return ele > -1 }
	testEvery(isSmall)
})

test('fill', t => {
	const testFill = testArrayMethod(t, undefined, 'fill')
	testFill(1)
	testFill(4, 1, 2)
	testFill(-1, -1, -1)
	testFill(-100, -100, -100)
	testFill([], 1, {})
	testFill(arguments)
	testFill('fsfsfs')
})

test('find', t => {
	const testFind = testArrayMethod(t, undefined, 'find')
	function isMax(ele) {
		return ele > 6
	}
	testFind(isMax)
})

test('includes', t => {
	const testIncludes = testArrayMethod(t, undefined, 'includes')
	testIncludes(1, 2)
	testIncludes(0)
	testIncludes(-1, 0)
	testIncludes(-100, -100)
	testIncludes('sxxxdxx')
})

test('join', t => {
	const testJoin = testArrayMethod(t, undefined, 'join')
	testJoin()
	testJoin('-')
	testJoin('+')
	testJoin('s')
	testJoin('111')
})

test('reduce', t => {
	const testReduce = testArrayMethod(t, undefined, 'reduce')
	function total(sum, value) { return sum + value }
	function maxCallback2(max, cur) { return Math.max(max, cur) }
	testReduce(total)
	testReduce(maxCallback2)
})

test('isArray', t => {
	let testcase = []
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = [1, 2]
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = [1, 2, { a: 1, b: 2 }]
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = new Array()
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = Object.keys(testcase)
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = (function () {
		const a = {}
		a[0] = 1;
		a[1] = 2;
		a.length = 2;
		return a
	}())
	t.is(Array.isArray(testcase), Array._isArray(testcase))
})

test('push', t => {
	const testPush = testArrayMethod(t, undefined, 'push')
	testPush(1)
	testPush(56, 6, 7, 8)
	testPush('a', 'b', 'c')
	testPush({}, undefined, null)
	testPush([], 0, '{d}')
})

test('reverse', t => {
	const testReverse = testArrayMethod(t, undefined, 'reverse')
	testReverse()
	let testcase = [{}, 'a', 'c', undefined]
	t.deepEqual(testcase.reverse(), testcase._reverse())
	testcase = [[1], [2, 3], [6, 7, 8]]
	t.deepEqual(testcase.reverse(), testcase._reverse())
})

test('some', t => {
	const testSome = testArrayMethod(t, undefined, 'some')
	function isSame(ele) { return ele === ele }
	testSome(isSame)
	function isSmall(ele) { return ele > -1 }
	testSome(isSmall)
	function isSameBig(ele) { return ele > 10 }
	testSome(isSameBig)
})

test('unshift', t => {
	const testUnshift = testArrayMethod(t, undefined, 'unshift')
	testUnshift(['h'], 2)
	testUnshift(undefined)
	testUnshift({})
	testUnshift('foo')
	testUnshift([[1, '{}', [100]]])
})

test('slice', t => {
	const testSlice = testArrayMethod(t, undefined, 'slice')
	testSlice()
	testSlice(0)
	testSlice(-1, -2)
	testSlice(4, 7)
	testSlice(-100, -100)
	testSlice('-1', '0')
	testSlice('4', '7')
})

test('splice', t => {
	const testSplice = testArrayMethod(t, undefined, 'splice')
	testSplice(0)
	testSplice(1)
	testSplice(2, 1)
	testSplice(0, 1)
	testSplice(2, 0, 'hello')
	testSplice(2, 8)
	testSplice(-10, 8)
})
