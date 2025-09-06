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

# cumin

> Compute the cumulative minimum value along one or more [ndarray][@stdlib/ndarray/ctor] dimensions.

<section class="usage">

## Usage

```javascript
var cumin = require( '@stdlib/stats/cumin' );
```

#### cumin( x\[, options] )

Computes the cumulative minimum value along one or more [ndarray][@stdlib/ndarray/ctor] dimensions.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var x = array( [ -1.0, 2.0, -3.0 ] );

var y = cumin( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ -1.0, -1.0, -3.0 ]
```

The function has the following parameters:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have a real-valued or "generic" [data type][@stdlib/ndarray/dtypes].
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dims**: list of dimensions over which to perform operation. If not provided, the function performs the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor].
-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. Must be a real-valued or "generic" [data type][@stdlib/ndarray/dtypes].

By default, the function performs the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor]. To perform the operation over specific dimensions, provide a `dims` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var x = array( [ -1.0, 2.0, -3.0, 4.0 ], {
    'shape': [ 2, 2 ],
    'order': 'row-major'
});

var v = ndarray2array( x );
// returns [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ]

var y = cumin( x, {
    'dims': [ 0 ]
});
// returns <ndarray>

v = ndarray2array( y );
// returns [ [ -1.0, 2.0 ], [ -3.0, 2.0 ] ]

y = cumin( x, {
    'dims': [ 1 ]
});
// returns <ndarray>

v = ndarray2array( y );
// returns [ [ -1.0, -1.0 ], [ -3.0, -3.0 ] ]

y = cumin( x, {
    'dims': [ 0, 1 ]
});
// returns <ndarray>

v = ndarray2array( y );
// returns [ [ -1.0, -1.0 ], [ -3.0, -3.0 ] ]
```

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] determined by the function's output data type [policy][@stdlib/ndarray/output-dtype-policies]. To override the default behavior, set the `dtype` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var getDType = require( '@stdlib/ndarray/dtype' );
var array = require( '@stdlib/ndarray/array' );

var x = array( [ -1.0, 2.0, -3.0 ], {
    'dtype': 'generic'
});

var y = cumin( x, {
    'dtype': 'float64'
});
// returns <ndarray>

var dt = getDType( y );
// returns 'float64'
```

#### cumin.assign( x, out\[, options] )

Computes the cumulative minimum value along one or more [ndarray][@stdlib/ndarray/ctor] dimensions and assigns results to a provided output [ndarray][@stdlib/ndarray/ctor].

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );
var zerosLike = require( '@stdlib/ndarray/zeros-like' );

var x = array( [ -1.0, 2.0, -3.0 ] );
var y = zerosLike( x );

var out = cumin.assign( x, y );
// returns <ndarray>

var v = ndarray2array( out );
// returns [ -1.0, -1.0, -3.0 ]

var bool = ( out === y );
// returns true
```

The method has the following parameters:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have a real-valued or generic [data type][@stdlib/ndarray/dtypes].
-   **out**: output [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform operation. If not provided, the function performs the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both functions iterate over [ndarray][@stdlib/ndarray/ctor] elements according to the memory layout of the input [ndarray][@stdlib/ndarray/ctor].
-   The output data type [policy][@stdlib/ndarray/output-dtype-policies] only applies to the main function and specifies that, by default, the function must return an [ndarray][@stdlib/ndarray/ctor] having the same [data type][@stdlib/ndarray/dtypes] as the input [ndarray][@stdlib/ndarray/ctor]. For the `assign` method, the output [ndarray][@stdlib/ndarray/ctor] is allowed to have any supported output [data type][@stdlib/ndarray/dtypes].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var getDType = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var cumin = require( '@stdlib/stats/cumin' );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, 0, 20, {
    'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Perform operation:
var y = cumin( x, {
    'dims': [ 0 ]
});

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

</section>

<!-- /.links -->
