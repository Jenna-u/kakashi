import test from 'ava'
import '../is_array'
import '../copy_within'
import '../concat'
import '../fill'
import '../find'
import '../includes'
import '../join'
import '../reduce'

function testArrayMethod (t, array, name) {
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
	const testConcat = testArrayMethod(t, [1,2,3,4], 'concat')
	testConcat([5,6,7])
	testConcat([5,6,7], [5, 3])
	testConcat([])
	testConcat([], 1, {})
	testConcat()
	testConcat(1)
	testConcat(arguments)
});

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
	testReduce(total)
})

test('isArray', t => {
	let testcase = []
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = [1, 2]
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = [1, 2, {a: 1, b: 2}]
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = new Array()
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = Object.keys(testcase)
	t.is(Array.isArray(testcase), Array._isArray(testcase))
	testcase = (function() {
		const a = {}
		a[0] = 1;
		a[1] = 2;
		a.length = 2;
		return a
	}())
	t.is(Array.isArray(testcase), Array._isArray(testcase))
})
