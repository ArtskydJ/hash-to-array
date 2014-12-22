var test = require('tap').test
var stringifyArgs = require('./index.js')

function deepEqual(t0, description, obj, expected, ignoreIndex) {
	t0.test(description, function (t) {
		var result = stringifyArgs(obj)
		console.log()
		console.log(expected)
		console.log(result)
		t.equal(result.length, expected.length, 'lengths are equal')
		expected.forEach(function (r, i) {
			t.notEqual(result.indexOf(r), -1, r + ' expected')
			if (!ignoreIndex) {
				t.equal(i%2, result.indexOf(r)%2,
					'both indexes are ' + (i%2? 'values' : 'arguments'))
			}
		})
		t.end()
	})
}

test('basic argument building', function (t0) {
	deepEqual(t0, 'short arguments with number values', {
		x: 2,
		v: 50,
		j: 'hello'
	}, [
		'-x', 2,
		'-v', 50,
		'-j', 'hello'
	])

	deepEqual(t0, 'long arguments', {
		rate: 48000,
		bits: 'mp3'
	}, [
		'--bits', 'mp3',
		'--rate', 48000
	])

	t0.end()
})

test('special cases', function (t0) {
	deepEqual(t0, 'true and false values', {
		thingy: true,
		anotherthingy: true,
		dashes: false,
		kool: 'lol',
		trixy: 'true'
	}, [
		'--thingy',
		'--anotherthingy',
		'dashes',
		'--kool', 'lol',
		'--trixy', 'true'
	])
	t0.end()
})

