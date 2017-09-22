import test from 'ava'
import '../copy_within'
import '../concat'

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
