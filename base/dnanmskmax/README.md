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

# dnanmskmax

> Calculate the maximum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dnanmskmax = require( '@stdlib/stats/base/dnanmskmax' );
```

#### dnanmskmax( N, x, strideX, mask, strideMask )

Computes the maximum value of a double-precision floating-point strided array `x` according to a `mask`, ignoring `NaN` values.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

var v = dnanmskmax( x.length, x, 1, mask, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **mask**: mask [`Uint8Array`][@stdlib/array/uint8]. If a `mask` array element is `0`, the corresponding element in `x` is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in `x` is considered invalid/missing and **excluded** from computation.
-   **strideMask**: index increment for `mask`.

The `N` and `stride` parameters determine which elements are accessed at runtime. For example, to compute the maximum value of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float64Array( [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, 5.0, 6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var N = floor( x.length / 2 );

var v = dnanmskmax( N, x, 2, mask, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce offsets, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var floor = require( '@stdlib/math/base/special/floor' );

var x0 = new Float64Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var mask0 = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = dnanmskmax( N, x1, 2, mask1, 2 );
// returns 4.0
```

#### dnanmskmax.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask )

Computes the maximum value of a double-precision floating-point strided array according to a `mask`, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

var v = dnanmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetMask**: starting index for `mask`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the maximum value for every other value in `x` starting from the second value

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float64Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var N = floor( x.length / 2 );

var v = dnanmskmax.ndarray( N, x, 2, 1, mask, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var dnanmskmax = require( '@stdlib/stats/base/dnanmskmax' );

var mask;
var x;
var i;

x = new Float64Array( 10 );
mask = new Uint8Array( x.length );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        mask[ i ] = 1;
    } else {
        mask[ i ] = 0;
    }
    if ( randu() < 0.1 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( (randu()*100.0) - 50.0 );
    }
}
console.log( x );
console.log( mask );

var v = dnanmskmax( x.length, x, 1, mask, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dmskmax`][@stdlib/stats/strided/dmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats/strided/dnanmax`][@stdlib/stats/strided/dnanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/dnanmskmin`][@stdlib/stats/base/dnanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanmskmax`][@stdlib/stats/base/nanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/snanmskmax`][@stdlib/stats/base/snanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dmskmax]: https://github.com/stdlib-js/stats/tree/main/strided/dmskmax

[@stdlib/stats/strided/dnanmax]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmax

[@stdlib/stats/base/dnanmskmin]: https://github.com/stdlib-js/stats/tree/main/base/dnanmskmin

[@stdlib/stats/base/nanmskmax]: https://github.com/stdlib-js/stats/tree/main/base/nanmskmax

[@stdlib/stats/base/snanmskmax]: https://github.com/stdlib-js/stats/tree/main/base/snanmskmax

<!-- </related-links> -->

</section>

<!-- /.links -->
