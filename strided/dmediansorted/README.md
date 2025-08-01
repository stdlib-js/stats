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

# dmediansorted

> Calculate the median value of a sorted double-precision floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmediansorted = require( '@stdlib/stats/strided/dmediansorted' );
```

#### dmediansorted( N, x, strideX )

Computes the median value of a sorted double-precision floating-point strided array `x`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
var v = dmediansorted( x.length, x, 1 );
// returns 2.0

x = new Float64Array( [ 3.0, 2.0, 1.0 ] );
v = dmediansorted( x.length, x, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: sorted input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the median value of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, 3.0, 3.0, 4.0, 2.0 ] );

var v = dmediansorted( 4, x, 2 );
// returns 2.5
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dmediansorted( 4, x1, 2 );
// returns 2.0
```

#### dmediansorted.ndarray( N, x, strideX, offsetX )

Computes the median value of a sorted double-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

var v = dmediansorted.ndarray( x.length, x, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the median value for every other value in `x` starting from the second value

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = dmediansorted.ndarray( 4, x, 2, 1 );
// returns 2.0
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
var dmediansorted = require( '@stdlib/stats/strided/dmediansorted' );

var options = {
    'dtype': 'float64'
};
var x = linspace( -5.0, 5.0, 10, options );
console.log( x );

var v = dmediansorted( x.length, x, 1 );
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
#include "stdlib/stats/strided/dmediansorted.h"
```

#### stdlib_strided_dmediansorted( N, \*X, strideX )

Computes the median value of a sorted double-precision floating-point strided array.

```c
const double x[] = { 1.0, 2.0, 3.0 };

double v = stdlib_strided_dmediansorted( 3, x, 1 );
// returns 2.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
double stdlib_strided_dmediansorted( const CBLAS_INT N, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dmediansorted_ndarray( N, \*X, strideX, offsetX )

Computes the median value of a sorted double-precision floating-point strided array using alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0 };

double v = stdlib_strided_dmediansorted_ndarray( 3, x, 1, 0 );
// returns 2.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
double stdlib_strided_dmediansorted_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/stats/strided/dmediansorted.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the median value:
    double v = stdlib_strided_dmediansorted( N, x, strideX );

    // Print the result:
    printf( "median: %lf\n", v );
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

-   <span class="package-name">[`@stdlib/stats/strided/dmean`][@stdlib/stats/strided/dmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/mediansorted`][@stdlib/stats/strided/mediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/smediansorted`][@stdlib/stats/strided/smediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dmean]: https://github.com/stdlib-js/stats/tree/main/strided/dmean

[@stdlib/stats/strided/mediansorted]: https://github.com/stdlib-js/stats/tree/main/strided/mediansorted

[@stdlib/stats/strided/smediansorted]: https://github.com/stdlib-js/stats/tree/main/strided/smediansorted

<!-- </related-links> -->

</section>

<!-- /.links -->
