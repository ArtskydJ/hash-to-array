hash-to-array
=============

Turns an arg hash into an array of arguments. Useful when running command line apps with child_process.

#example


Shutdown:
```js
var hashToArray = require('hash-to-array')
var spawn = require('child_process').spawn

var args = hashToArray({
	r: true,
	t: 0
})

spawn('shutdown', args)
```

#license

[VOL](http://veryopenlicense.com)
