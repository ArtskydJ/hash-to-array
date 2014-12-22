module.exports = function args(hash) {
	return Object.keys(hash).reduce(function (compiled, key) {
		var value = hash[key]
		var bool = typeof value === 'boolean'
		var noDashes = bool && !value
		compiled.push( noDashes ? key : prependDashes(key) )
		if (!bool) compiled.push( value )
		return compiled
	}, [])
}

function prependDashes(key) {
	return (key.length > 1 ? '--' : '-') + key
}
