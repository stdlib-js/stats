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

# mskmin

> Calculate the minimum value of a strided array according to a mask.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mskmin = require( '@stdlib/stats/strided/mskmin' );
```

#### mskmin( N, x, strideX, mask, strideMask )

Computes the minimum value of a strided array `x` according to a `mask`.

```javascript
var x = [ 1.0, -2.0, -4.0, 2.0 ];
var mask = [ 0, 0, 1, 0 ];

var v = mskmin( x.length, x, 1, mask, 1 );
// returns -2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.
-   **mask**: mask [`Array`][mdn-array] or [`typed array`][mdn-typed-array]. If a `mask` array element is `0`, the corresponding element in `x` is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in `x` is considered invalid/missing and **excluded** from computation.
-   **strideMask**: stride length for `mask`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the minimum value of every other element in `x`,

```javascript
var x = [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, -5.0, -6.0 ];
var mask = [ 0, 0, 0, 0, 0, 0, 1, 1 ];

var v = mskmin( 4, x, 2, mask, 2 );
// returns -7.0
```

Note that indexing is relative to the first index. To introduce offsets, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x0 = new Float64Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var mask0 = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = mskmin( 4, x1, 2, mask1, 2 );
// returns -2.0
```

#### mskmin.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask )

Computes the minimum value of a strided array according to a `mask` and using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, -4.0, 2.0 ];
var mask = [ 0, 0, 1, 0 ];

var v = mskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
// returns -2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetMask**: starting index for `mask`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the minimum value for every other value in `x` starting from the second value

```javascript
var x = [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, -5.0, -6.0 ];
var mask = [ 0, 0, 0, 0, 0, 0, 1, 1 ];

var v = mskmin.ndarray( 4, x, 2, 1, mask, 2, 1 );
// returns -2.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   Depending on the environment, the typed versions ([`dmskmin`][@stdlib/stats/strided/dmskmin], [`smskmin`][@stdlib/stats/strided/smskmin], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var mskmin = require( '@stdlib/stats/strided/mskmin' );

var x = uniform( 10, -50.0, 50.0, {
    'dtype': 'float64'
});
console.log( x );

var mask = bernoulli( x.length, 0.2, {
    'dtype': 'uint8'
});
console.log( mask );

var v = mskmin( x.length, x, 1, mask, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dmskmin`][@stdlib/stats/strided/dmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats/strided/min`][@stdlib/stats/strided/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/mskmax`][@stdlib/stats/strided/mskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats/strided/nanmin`][@stdlib/stats/strided/nanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/smskmin`][@stdlib/stats/strided/smskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dmskmin]: https://github.com/stdlib-js/stats/tree/main/strided/dmskmin

[@stdlib/stats/strided/min]: https://github.com/stdlib-js/stats/tree/main/strided/min

[@stdlib/stats/strided/mskmax]: https://github.com/stdlib-js/stats/tree/main/strided/mskmax

[@stdlib/stats/strided/nanmin]: https://github.com/stdlib-js/stats/tree/main/strided/nanmin

[@stdlib/stats/strided/smskmin]: https://github.com/stdlib-js/stats/tree/main/strided/smskmin

<!-- </related-links> -->

</section>

<!-- /.links -->
