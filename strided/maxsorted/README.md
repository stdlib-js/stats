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

# maxsorted

> Calculate the maximum value of a sorted strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var maxsorted = require( '@stdlib/stats/strided/maxsorted' );
```

#### maxsorted( N, x, strideX )

Computes the maximum value of a sorted strided array `x`.

```javascript
var x = [ 1.0, 2.0, 3.0 ];
var N = x.length;

var v = maxsorted( N, x, 1 );
// returns 3.0

x = [ 3.0, 2.0, 1.0 ];
N = x.length;

v = maxsorted( N, x, 1 );
// returns 3.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: sorted input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the maximum value of every other element in `x`,

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, 3.0, 3.0, 4.0, 2.0 ];

var v = maxsorted( 4, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = maxsorted( 4, x1, 2 );
// returns 4.0
```

#### maxsorted.ndarray( N, x, strideX, offsetX )

Computes the maximum value of a sorted strided array using alternative indexing semantics.

```javascript
var x = [ 1.0, 2.0, 3.0 ];

var v = maxsorted.ndarray( x.length, x, 1, 0 );
// returns 3.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the maximum value for every other value in `x` starting from the second value

```javascript
var x = [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ];

var v = maxsorted.ndarray( 4, x, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   The input strided array must be sorted in either **strictly** ascending or descending order.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var maxsorted = require( '@stdlib/stats/strided/maxsorted' );

var x = linspace( -50.0, 50.0, 10 );
console.log( x );

var v = maxsorted( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dmaxsorted`][@stdlib/stats/strided/dmaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/max`][@stdlib/stats/strided/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/minsorted`][@stdlib/stats/base/minsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/smaxsorted`][@stdlib/stats/strided/smaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

[@stdlib/stats/strided/dmaxsorted]: https://github.com/stdlib-js/stats/tree/main/strided/dmaxsorted

[@stdlib/stats/strided/max]: https://github.com/stdlib-js/stats/tree/main/strided/max

[@stdlib/stats/base/minsorted]: https://github.com/stdlib-js/stats/tree/main/base/minsorted

[@stdlib/stats/strided/smaxsorted]: https://github.com/stdlib-js/stats/tree/main/strided/smaxsorted

<!-- </related-links> -->

</section>

<!-- /.links -->
