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

# smax

> Calculate the maximum value of a single-precision floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var smax = require( '@stdlib/stats/strided/smax' );
```

#### smax( N, x, strideX )

Computes the maximum value of a single-precision floating-point strided array `x`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = smax( x.length, x, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the maximum value of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = smax( 4, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = smax( 4, x1, 2 );
// returns 4.0
```

#### smax.ndarray( N, x, strideX, offsetX )

Computes the maximum value of a single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = smax.ndarray( x.length, x, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the maximum value for every other element in `x` starting from the second element

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = smax.ndarray( 4, x, 2, 1 );
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var smax = require( '@stdlib/stats/strided/smax' );

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float32'
});
console.log( x );

var v = smax( x.length, x, 1 );
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
#include "stdlib/stats/strided/smax.h"
```

#### stdlib_strided_smax( N, \*X, strideX )

Computes the maximum value of a single-precision floating-point strided array.

```c
const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f };

float v = stdlib_strided_smax( 4, x, 1 );
// returns 3.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
float stdlib_strided_smax( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_smax_ndarray( N, \*X, strideX, offsetX )

Computes the maximum value of a single-precision floating-point strided array using alternative indexing semantics.

```c
const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f };

float v = stdlib_strided_smax_ndarray( 4, x, 1, 0 );
// returns 3.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
float stdlib_strided_smax_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/stats/strided/smax.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the maximum value:
    float v = stdlib_strided_smax( N, x, strideX );

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

-   <span class="package-name">[`@stdlib/stats/strided/dmax`][@stdlib/stats/strided/dmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/max`][@stdlib/stats/strided/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/smin`][@stdlib/stats/strided/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/snanmax`][@stdlib/stats/strided/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dmax]: https://github.com/stdlib-js/stats/tree/main/strided/dmax

[@stdlib/stats/strided/max]: https://github.com/stdlib-js/stats/tree/main/strided/max

[@stdlib/stats/strided/smin]: https://github.com/stdlib-js/stats/tree/main/strided/smin

[@stdlib/stats/strided/snanmax]: https://github.com/stdlib-js/stats/tree/main/strided/snanmax

<!-- </related-links> -->

</section>

<!-- /.links -->
