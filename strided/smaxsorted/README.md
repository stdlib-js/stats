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
var smaxsorted = require( '@stdlib/stats/strided/smaxsorted' );
```

#### smaxsorted( N, x, stride )

Computes the maximum value of a sorted single-precision floating-point strided array `x`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

var v = smaxsorted( x.length, x, 1 );
// returns 3.0

x = new Float32Array( [ 3.0, 2.0, 1.0 ] );

v = smaxsorted( x.length, x, 1 );
// returns 3.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: sorted input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the maximum value of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, 3.0, 3.0, 4.0, 2.0 ] );

var v = smaxsorted( 4, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = smaxsorted( 4, x1, 2 );
// returns 4.0
```

#### smaxsorted.ndarray( N, x, strideX, offsetX )

Computes the maximum value of a sorted single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

var v = smaxsorted.ndarray( x.length, x, 1, 0 );
// returns 3.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the maximum value for every other element in `x` starting from the second element

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = smaxsorted.ndarray( 4, x, 2, 1 );
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
var linspace = require( '@stdlib/array/linspace' );
var smaxsorted = require( '@stdlib/stats/strided/smaxsorted' );

var options = {
    'dtype': 'float32'
};
var x = linspace( -5.0, 5.0, 10, options );
console.log( x );

var v = smaxsorted( x.length, x, 1 );
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
#include "stdlib/stats/strided/smaxsorted.h"
```

#### stdlib_strided_smaxsorted( N, \*X, strideX )

Computes the maximum value of a sorted single-precision floating-point strided array.

```c
const float x[] = { 1.0f, 2.0f, 3.0f };

float v = stdlib_strided_smaxsorted( 3, x, 1 );
// returns 3.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
float stdlib_strided_smaxsorted( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_smaxsorted_ndarray( N, \*X, strideX, offsetX )

Computes the maximum value of a sorted single-precision floating-point strided array using alternative indexing semantics.

```c
const float x[] = { 1.0f, 2.0f, 3.0f };

float v = stdlib_strided_smaxsorted_ndarray( 3, x, 1, 0 );
// returns 3.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
float stdlib_strided_smaxsorted_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/stats/strided/smaxsorted.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the maximum value:
    float v = stdlib_strided_smaxsorted( N, x, strideX );

    // Print the result:
    printf( "max: %f\n", v );
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

-   <span class="package-name">[`@stdlib/stats/strided/dmaxsorted`][@stdlib/stats/strided/dmaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/maxsorted`][@stdlib/stats/strided/maxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/smax`][@stdlib/stats/strided/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/sminsorted`][@stdlib/stats/strided/sminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dmaxsorted]: https://github.com/stdlib-js/stats/tree/main/strided/dmaxsorted

[@stdlib/stats/strided/maxsorted]: https://github.com/stdlib-js/stats/tree/main/strided/maxsorted

[@stdlib/stats/strided/smax]: https://github.com/stdlib-js/stats/tree/main/strided/smax

[@stdlib/stats/strided/sminsorted]: https://github.com/stdlib-js/stats/tree/main/strided/sminsorted

<!-- </related-links> -->

</section>

<!-- /.links -->
