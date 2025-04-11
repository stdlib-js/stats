<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# cumax

> Calculate the cumulative maximum of a strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cumax = require( '@stdlib/stats/base/cumax' );
```

#### cumax( N, x, strideX, y, strideY )

Computes the cumulative maximum of a strided array.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var y = [ 0.0, 0.0, 0.0 ];

cumax( x.length, x, 1, y, 1 );
// y => [ 1.0, 1.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.
-   **y**: output [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the cumulative maximum of every other element in `x`,

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

var v = cumax( 4, x, 2, y, 1 );
// y => [ 1.0, 2.0, 2.0, 4.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( x0.length );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

cumax( 4, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 4.0, 4.0, 4.0, 4.0, 0.0 ]
```

#### cumax.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative maximum of a strided array using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var y = [ 0.0, 0.0, 0.0 ];

cumax.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => [ 1.0, 1.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on a starting indices. For example, to calculate the cumulative maximum of every other value in `x` starting from the second value and to store in the last `N` elements of `y` starting from the last element

```javascript
var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

cumax.ndarray( 4, x, 2, 1, y, -1, y.length-1 );
// y => [ 0.0, 0.0, 0.0, 0.0, 4.0, 2.0, 1.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   Depending on the environment, the typed versions ([`dcumax`][@stdlib/stats/strided/dcumax], [`scumax`][@stdlib/stats/strided/scumax], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Float64Array = require( '@stdlib/array/float64' );
var cumax = require( '@stdlib/stats/base/cumax' );

var x = discreteUniform( 10, 0, 100, {
    'dtype': 'float64'
});
var y = new Float64Array( x.length );
console.log( x );
console.log( y );

cumax( x.length, x, 1, y, -1 );
console.log( y );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/base/cumin`][@stdlib/stats/base/cumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/dcumax`][@stdlib/stats/strided/dcumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of double-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/stats/strided/scumax`][@stdlib/stats/strided/scumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of single-precision floating-point strided array elements.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/cumin]: https://github.com/stdlib-js/stats/tree/main/base/cumin

[@stdlib/stats/strided/dcumax]: https://github.com/stdlib-js/stats/tree/main/strided/dcumax

[@stdlib/stats/strided/scumax]: https://github.com/stdlib-js/stats/tree/main/strided/scumax

<!-- </related-links> -->

</section>

<!-- /.links -->
