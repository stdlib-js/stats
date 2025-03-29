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

# smidrange

> Calculate the [mid-range][mid-range] of a single-precision floating-point strided array.

<section class="intro">

The [**mid-range**][mid-range], or **mid-extreme**, is the arithmetic mean of the maximum and minimum values in a data set. The measure is the midpoint of the range and a measure of central tendency.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var smidrange = require( '@stdlib/stats/base/smidrange' );
```

#### smidrange( N, x, strideX )

Computes the [mid-range][mid-range] of a single-precision floating-point strided array `x`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = smidrange( x.length, x, 1 );
// returns 0.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [mid-range][mid-range] of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = smidrange( 4, x, 2 );
// returns 1.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = smidrange( 4, x1, 2 );
// returns 1.0
```

#### smidrange.ndarray( N, x, strideX, offsetX )

Computes the [mid-range][mid-range] of a single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = smidrange.ndarray( x.length, x, 1, 0 );
// returns 0.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [mid-range][mid-range] for every other element in `x` starting from the second element

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = smidrange.ndarray( 4, x, 2, 1 );
// returns 1.0
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var smidrange = require( '@stdlib/stats/base/smidrange' );

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float32'
});
console.log( x );

var v = smidrange( x.length, x, 1 );
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
#include "stdlib/stats/base/smidrange.h"
```

#### stdlib_strided_smidrange( N, \*X, strideX )

Computes the [mid-range][mid-range] of a single-precision floating-point strided array `x`.

```c
const float x[] = { 1.0f, -2.0f, 3.0f, 4.0f };

float v = stdlib_strided_smidrange( 4, x, 1 );
// returns 2.5f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
float stdlib_strided_smidrange( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_smidrange_ndarray( N, \*X, strideX, offsetX )

Computes the [mid-range][mid-range] of a single-precision floating-point strided array using alternative indexing semantics.

```c
const float x[] = { 1.0f, -2.0f, 3.0f, 4.0f };

float v = stdlib_strided_smidrange_ndarray( 4, x, 1, 0 );
// returns 2.5f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
float stdlib_strided_smidrange_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/stats/base/smidrange.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, -2.0f, -3.0f, 4.0f, -5.0f, -6.0f, 7.0f, 8.0f };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the mid-range:
    float v = stdlib_strided_smidrange( N, x, strideX );

    // Print the result:
    printf( "mid-range: %f\n", v );
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

-   <span class="package-name">[`@stdlib/stats/strided/dmidrange`][@stdlib/stats/strided/dmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/smax`][@stdlib/stats/base/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/smean`][@stdlib/stats/base/smean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/smin`][@stdlib/stats/base/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/srange`][@stdlib/stats/base/srange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mid-range]: https://en.wikipedia.org/wiki/Mid-range

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dmidrange]: https://github.com/stdlib-js/stats/tree/main/strided/dmidrange

[@stdlib/stats/base/smax]: https://github.com/stdlib-js/stats/tree/main/base/smax

[@stdlib/stats/base/smean]: https://github.com/stdlib-js/stats/tree/main/base/smean

[@stdlib/stats/base/smin]: https://github.com/stdlib-js/stats/tree/main/base/smin

[@stdlib/stats/base/srange]: https://github.com/stdlib-js/stats/tree/main/base/srange

<!-- </related-links> -->

</section>

<!-- /.links -->
