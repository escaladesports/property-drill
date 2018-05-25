# property-drill

Safely find deep properties in objects and arrays.

## Installation

With npm:

```npm
npm install --save property-drill
```

Or Yarn:

```yarn
yarn add property-drill
```

## Usage

```javascript
var propDrill = require('property-drill')

var obj = {
   a: {
      b: ['c', 'd', 'e']
   }
}

var prop = propDrill(obj, `a`, `b`, 0) // Returns "c"
```

## Why?

While there are tons of modules that do the same thing, many of them do not search within arrays or throw errors if you search deeper than the object is. The ones that meet these requirements take strings as your second argument. This can lead to innaccurate results when mixing objects and arrays and can also be much slower when more powerful regex is used.

