hash-to-array
=============

Turns an arg hash into an array of arguments. Useful when running command line apps with child_process.

#examples

Please note that these examples are not good real-world use-cases. There are much better ways of accomplishing what is shown in these examples!

rm -rf dir:
```js
var hashToArray = require('hash-to-array')
var spawn = require('child_process').spawn

var args = hashToArray({
	r: true,
	f: true,
	'/lolz/moar/lol': false
}) //=> [ '-r', '-f', '/lolz/moar/lol' ]
spawn('rm', args)
```

mkdir -p dir:
```js
var hashToArray = require('hash-to-array')
var spawn = require('child_process').spawn

spawn('mkdir', hashToArray({p: true})) //=> [ '-p' ]
```

browserify:
```js
var hashToArray = require('hash-to-array')
var spawn = require('child_process').spawn

var args = hashToArray({
	'myModule.js': false,
	d: true,
	outfile: './bundle.js'
}) //=> [ 'myModule.js', '-d', '--outfile', './bundle.js' ]
spawn('browserify', args)
```

#usage

##hashToArray(hash)

- `hash` is a map of the input arguments and their corresponding values.

Note that boolean values do not get pushed to the array. They signify the presence of prepended dashes. (See examples.)

#license

[VOL](http://veryopenlicense.com)
