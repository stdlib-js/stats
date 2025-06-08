<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# maxBy

> Compute the maximum value along one or more [ndarray][@stdlib/ndarray/ctor] dimensions according to a callback function.

<section class="usage">

## Usage

```javascript
var maxBy = require( '@stdlib/stats/max-by' );
```

#### maxBy( x\[, options], clbk\[, thisArg] )

Computes the maximum value along one or more [ndarray][@stdlib/ndarray/ctor] dimensions according to a callback function.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ -1.0, 2.0, -3.0 ] );

function clbk( v ) {
    return v * 2.0;
}

var y = maxBy( x, clbk );
// returns <ndarray>

var v = y.get();
// returns 4.0
```

The function has the following parameters:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have a real-valued or "generic" [data type][@stdlib/ndarray/dtypes].
-   **options**: function options (_optional_).
-   **clbk**: callback function.
-   **thisArg**: callback function execution context (_optional_).

The invoked callback is provided three arguments:

-   **value**: current array element.
-   **idx**: current array element index.
-   **array**: input ndarray.

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ -1.0, 2.0, -3.0 ] );

function clbk( v ) {
    this.count += 1;
    return v * 2.0;
}

var ctx = {
    'count': 0
};
var y = maxBy( x, clbk, ctx );
// returns <ndarray>

var v = y.get();
// returns 4.0

var count = ctx.count;
// returns 3
```

The function accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction. If not provided, the function performs a reduction over all elements in a provided input [ndarray][@stdlib/ndarray/ctor].
-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. Must be a real-valued or "generic" [data type][@stdlib/ndarray/dtypes].
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned [ndarray][@stdlib/ndarray/ctor] as singleton dimensions. Default: `false`.

By default, the function performs a reduction over all elements in a provided input [ndarray][@stdlib/ndarray/ctor]. To perform a reduction over specific dimensions, provide a `dims` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

function clbk( v ) {
    return v * 100.0;
}

var x = array( [ -1.0, 2.0, -3.0, 4.0 ], {
    'shape': [ 2, 2 ],
    'order': 'row-major'
});
var v = ndarray2array( x );
// returns [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ]

var opts = {
    'dims': [ 0 ]
};
var y = maxBy( x, opts, clbk );
// returns <ndarray>

v = ndarray2array( y );
// returns [ -100.0, 400.0 ]

opts = {
    'dims': [ 1 ]
};
y = maxBy( x, opts, clbk );
// returns <ndarray>

v = ndarray2array( y );
// returns [ 200.0, 400.0 ]

opts = {
    'dims': [ 0, 1 ]
};
y = maxBy( x, opts, clbk );
// returns <ndarray>

v = y.get();
// returns 400.0
```

By default, the function excludes reduced dimensions from the output [ndarray][@stdlib/ndarray/ctor]. To include the reduced dimensions as singleton dimensions, set the `keepdims` option to `true`.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

function clbk( v ) {
    return v * 100.0;
}

var x = array( [ -1.0, 2.0, -3.0, 4.0 ], {
    'shape': [ 2, 2 ],
    'order': 'row-major'
});

var v = ndarray2array( x );
// returns [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ]

var opts = {
    'dims': [ 0 ],
    'keepdims': true
};
var y = maxBy( x, opts, clbk );
// returns <ndarray>

v = ndarray2array( y );
// returns [ [ -100.0, 400.0 ] ]

opts = {
    'dims': [ 1 ],
    'keepdims': true
};
y = maxBy( x, opts, clbk );
// returns <ndarray>

v = ndarray2array( y );
// returns [ [ 200.0 ], [ 400.0 ] ]

opts = {
    'dims': [ 0, 1 ],
    'keepdims': true
};
y = maxBy( x, opts, clbk );
// returns <ndarray>

v = ndarray2array( y );
// returns [ [ 400.0 ] ]
```

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] determined by the function's output data type [policy][@stdlib/ndarray/output-dtype-policies]. To override the default behavior, set the `dtype` option.

```javascript
var getDType = require( '@stdlib/ndarray/dtype' );
var array = require( '@stdlib/ndarray/array' );

function clbk( v ) {
    return v * 100.0;
}

var x = array( [ -1.0, 2.0, -3.0 ], {
    'dtype': 'generic'
});

var opts = {
    'dtype': 'float64'
};
var y = maxBy( x, opts, clbk );
// returns <ndarray>

var dt = getDType( y );
// returns 'float64'
```

#### maxBy.assign( x, out\[, options], clbk\[, thisArg] )

Computes the maximum value along one or more [ndarray][@stdlib/ndarray/ctor] dimensions according to a callback function and assigns results to a provided output [ndarray][@stdlib/ndarray/ctor].

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );

function clbk( v ) {
    return v * 100.0;
}

var x = array( [ -1.0, 2.0, -3.0 ] );
var y = zeros( [] );

var out = maxBy.assign( x, y, clbk );
// returns <ndarray>

var v = out.get();
// returns 200.0

var bool = ( out === y );
// returns true
```

The method has the following parameters:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have a real-valued or generic [data type][@stdlib/ndarray/dtypes].
-   **out**: output [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).
-   **clbk**: callback function.
-   **thisArg**: callback execution context (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction. If not provided, the function performs a reduction over all elements in a provided input [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A provided callback function should return a numeric value.
-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.
-   Setting the `keepdims` option to `true` can be useful when wanting to ensure that the output [ndarray][@stdlib/ndarray/ctor] is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with ndarrays having the same shape as the input [ndarray][@stdlib/ndarray/ctor].
-   The output data type [policy][@stdlib/ndarray/output-dtype-policies] only applies to the main function and specifies that, by default, the function must return an [ndarray][@stdlib/ndarray/ctor] having a real-valued or "generic" [data type][@stdlib/ndarray/dtypes]. For the `assign` method, the output [ndarray][@stdlib/ndarray/ctor] is allowed to have any supported output [data type][@stdlib/ndarray/dtypes].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var getDType = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var maxBy = require( '@stdlib/stats/max-by' );

// Define a function for generating an object having a random value:
function random() {
    return {
        'value': discreteUniform( 0, 20 )
    };
}

// Generate an array of random objects:
var xbuf = filledarrayBy( 25, 'generic', random );

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Define an accessor function:
function accessor( v ) {
    return v.value * 100;
}

// Perform a reduction:
var opts = {
    'dims': [ 0 ]
};
var y = maxBy( x, opts, accessor );

// Resolve the output array data type:
var dt = getDType( y );
console.log( dt );

// Print the results:
console.log( ndarray2array( y ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray-output-dtype-policies

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
