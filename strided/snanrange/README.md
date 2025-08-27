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

# snanrange

> Calculate the [range][range] of a single-precision floating-point strided array, ignoring `NaN` values.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var snanrange = require( '@stdlib/stats/strided/snanrange' );
```

#### snanrange( N, x, strideX )

Computes the [range][range] of a single-precision floating-point strided array `x`, ignoring `NaN` values.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = snanrange( x.length, x, 1 );
// returns 4.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [range][range] of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, NaN, NaN ] );

var v = snanrange( 4, x, 2 );
// returns 11.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x0 = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = snanrange( 4, x1, 2 );
// returns 6.0
```

#### snanrange.ndarray( N, x, strideX, offsetX )

Computes the [range][range] of a single-precision floating-point strided array, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = snanrange.ndarray( x.length, x, 1, 0 );
// returns 4.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [range][range] for every other element in `x` starting from the second element

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, NaN, NaN ] );

var v = snanrange.ndarray( 4, x, 2, 1 );
// returns 6.0
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
var Float32Array = require( '@stdlib/array/float32' );
var snanrange = require( '@stdlib/stats/strided/snanrange' );

var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( (randu()*100.0) - 50.0 );
    }
}
console.log( x );

var v = snanrange( x.length, x, 1 );
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
#include "stdlib/stats/strided/snanrange.h"
```

#### stdlib_strided_snanrange( N, \*X, strideX )

Computes the [range][range] of a single-precision floating-point strided array `x`, ignoring `NaN` values.

```c
const float x[] = { 1.0f, -2.0f, 0.0f/0.0f, -4.0f };

float v = stdlib_strided_snanrange( 4, x, 1 );
// returns 5.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
float stdlib_strided_snanrange( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_snanrange_ndarray( N, \*X, strideX, offsetX )

Computes the [range][range] of a single-precision floating-point strided array, ignoring `NaN` values and using alternative indexing semantics.

```c
const float x[] = { 1.0f, -2.0f, 0.0f/0.0f, -4.0f };

float v = stdlib_strided_snanrange_ndarray( 4, x, 1, 0 );
// returns 5.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
float stdlib_strided_snanrange_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/stats/strided/snanrange.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, -2.0f, -3.0f, 4.0f, -5.0f, -6.0f, 7.0f, 8.0f, 0.0f/0.0f, 0.0f/0.0f };

    // Specify the number of elements:
    const int N = 5;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the range:
    float v = stdlib_strided_snanrange( N, x, strideX );

    // Print the result:
    printf( "range: %f\n", v );
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

-   <span class="package-name">[`@stdlib/stats/strided/dnanrange`][@stdlib/stats/strided/dnanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/nanrange`][@stdlib/stats/strided/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/snanmax`][@stdlib/stats/strided/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/snanmin`][@stdlib/stats/strided/snanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/srange`][@stdlib/stats/strided/srange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dnanrange]: https://github.com/stdlib-js/stats/tree/main/strided/dnanrange

[@stdlib/stats/strided/nanrange]: https://github.com/stdlib-js/stats/tree/main/strided/nanrange

[@stdlib/stats/strided/snanmax]: https://github.com/stdlib-js/stats/tree/main/strided/snanmax

[@stdlib/stats/strided/snanmin]: https://github.com/stdlib-js/stats/tree/main/strided/snanmin

[@stdlib/stats/strided/srange]: https://github.com/stdlib-js/stats/tree/main/strided/srange

<!-- </related-links> -->

</section>

<!-- /.links -->
