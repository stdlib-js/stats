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

# smaxsorted

> Calculate the maximum value of a sorted single-precision floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var smaxsorted = require( '@stdlib/stats/base/smaxsorted' );
```

#### smaxsorted( N, x, stride )

Computes the maximum value of a sorted single-precision floating-point strided array `x`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var N = x.length;

var v = smaxsorted( N, x, 1 );
// returns 3.0

x = new Float32Array( [ 3.0, 2.0, 1.0 ] );
N = x.length;

v = smaxsorted( N, x, 1 );
// returns 3.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: sorted input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the maximum value of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, 3.0, 3.0, 4.0, 2.0 ] );
var N = floor( x.length / 2 );

var v = smaxsorted( N, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = smaxsorted( N, x1, 2 );
// returns 4.0
```

#### smaxsorted.ndarray( N, x, stride, offset )

Computes the maximum value of a sorted single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var N = x.length;

var v = smaxsorted.ndarray( N, x, 1, 0 );
// returns 3.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the maximum value for every other value in `x` starting from the second value

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var N = floor( x.length / 2 );

var v = smaxsorted.ndarray( N, x, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   The input strided array must be sorted in either **strictly** ascending or descending order.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var smaxsorted = require( '@stdlib/stats/base/smaxsorted' );

var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = i - 5.0;
}
console.log( x );

var v = smaxsorted( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/base/dmaxsorted`][@stdlib/stats/base/dmaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/maxsorted`][@stdlib/stats/base/maxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/smax`][@stdlib/stats/base/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/sminsorted`][@stdlib/stats/base/sminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dmaxsorted]: https://github.com/stdlib-js/stats/tree/main/base/dmaxsorted

[@stdlib/stats/base/maxsorted]: https://github.com/stdlib-js/stats/tree/main/base/maxsorted

[@stdlib/stats/base/smax]: https://github.com/stdlib-js/stats/tree/main/base/smax

[@stdlib/stats/base/sminsorted]: https://github.com/stdlib-js/stats/tree/main/base/sminsorted

<!-- </related-links> -->

</section>

<!-- /.links -->
