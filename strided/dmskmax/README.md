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

# dmskmax

> Calculate the maximum value of a double-precision floating-point strided array according to a mask.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmskmax = require( '@stdlib/stats/strided/dmskmax' );
```

#### dmskmax( N, x, strideX, mask, strideMask )

Computes the maximum value of a double-precision floating-point strided array according to a mask.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
var mask = new Uint8Array( [ 0, 0, 1, 0 ] );

var v = dmskmax( x.length, x, 1, mask, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **mask**: mask [`Uint8Array`][@stdlib/array/uint8]. If a `mask` array element is `0`, the corresponding element in `x` is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in `x` is considered invalid/missing and **excluded** from computation.
-   **strideMask**: stride length for `mask`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the maximum value of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, 5.0, 6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );

var v = dmskmax( 4, x, 2, mask, 2 );
// returns 4.0
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

var v = dmskmax( 4, x1, 2, mask1, 2 );
// returns 4.0
```

#### dmskmax.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask )

Computes the maximum value of a double-precision floating-point strided array according to a mask and using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
var mask = new Uint8Array( [ 0, 0, 1, 0 ] );

var v = dmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetMask**: starting index for `mask`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on a starting indices. For example, to calculate the maximum value for every other element in `x` starting from the second element

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );

var v = dmskmax.ndarray( 4, x, 2, 1, mask, 2, 1 );
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
var uniform = require( '@stdlib/random/array/uniform' );
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var dmskmax = require( '@stdlib/stats/strided/dmskmax' );

var uniformOptions = {
    'dtype': 'float64'
};
var bernoulliOptions = {
    'dtype': 'uint8'
};

var x = uniform( 10, -50.0, 50.0, uniformOptions );
var mask = bernoulli( x.length, 0.2, bernoulliOptions );
console.log( x );
console.log( mask );

var v = dmskmax( x.length, x, 1, mask, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/strided/dmskmax.h"
```

#### stdlib_strided_dmskmax( N, \*X, strideX, \*Mask, strideMask )

Computes the maximum value of a double-precision floating-point strided array according to a mask.

```c
#include <stdint.h>

const double x[] = { 1.0, -2.0, 2.0 };
const uint8_t mask[] = { 0, 1, 0 };

double v = stdlib_strided_dmskmax( 3, x, 1, mask, 1 );
// returns 2.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Mask**: `[in] uint8_t*` mask array. If a `Mask` array element is `0`, the corresponding element in `X` is considered valid and included in computation. If a `Mask` array element is `1`, the corresponding element in `X` is considered invalid/missing and excluded from computation.
-   **strideMask**: `[in] CBLAS_INT` stride length for `Mask`.

```c
double stdlib_strided_dmskmax( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const uint8_t *Mask, const CBLAS_INT strideMask );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_dmskmax_ndarray( N, \*X, strideX, offsetX, \*Mask, strideMask, offsetMask )

Computes the maximum value of a double-precision floating-point strided array according to a mask and using alternative indexing semantics.

```c
#include <stdint.h>

const double x[] = { 1.0, -2.0, 2.0 };
const uint8_t mask[] = { 0, 1, 0 };

double v = stdlib_strided_dmskmax_ndarray( 3, x, 1, 0, mask, 1, 0 );
// returns 2.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Mask**: `[in] uint8_t*` mask array. If a `Mask` array element is `0`, the corresponding element in `X` is considered valid and included in computation. If a `Mask` array element is `1`, the corresponding element in `X` is considered invalid/missing and excluded from computation.
-   **strideMask**: `[in] CBLAS_INT` stride length for `Mask`.
-   **offsetMask**: `[in] CBLAS_INT` starting index for `Mask`.

```c
double stdlib_strided_dmskmax_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const uint8_t *Mask, const CBLAS_INT strideMask, const CBLAS_INT offsetMask );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/strided/dmskmax.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 };

    // Create a mask array:
    const uint8_t mask[] = { 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 };

    // Specify the number of elements:
    const int N = 5;

    // Specify the stride lengths:
    const int strideX = 2;
    const int strideMask = 2;

    // Compute the maximum value:
    double v = stdlib_strided_dmskmax( N, x, strideX, mask, strideMask );

    // Print the result:
    printf( "max: %lf\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dmax`][@stdlib/stats/strided/dmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/dmskmin`][@stdlib/stats/strided/dmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats/strided/dnanmax`][@stdlib/stats/strided/dnanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/dnanmskmax`][@stdlib/stats/strided/dnanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/mskmax`][@stdlib/stats/strided/mskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats/strided/smskmax`][@stdlib/stats/strided/smskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dmax]: https://github.com/stdlib-js/stats/tree/main/strided/dmax

[@stdlib/stats/strided/dmskmin]: https://github.com/stdlib-js/stats/tree/main/strided/dmskmin

[@stdlib/stats/strided/dnanmax]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmax

[@stdlib/stats/strided/dnanmskmax]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmskmax

[@stdlib/stats/strided/mskmax]: https://github.com/stdlib-js/stats/tree/main/strided/mskmax

[@stdlib/stats/strided/smskmax]: https://github.com/stdlib-js/stats/tree/main/strided/smskmax

<!-- </related-links> -->

</section>

<!-- /.links -->
