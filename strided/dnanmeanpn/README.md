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

# dnanmeanpn

> Calculate the [arithmetic mean][arithmetic-mean] of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@939b3065109682bbaf70403aba5b13b054107b3e/lib/node_modules/@stdlib/stats/strided/dnanmeanpn/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dnanmeanpn = require( '@stdlib/stats/strided/dnanmeanpn' );
```

#### dnanmeanpn( N, x, strideX )

Computes the [arithmetic mean][arithmetic-mean] of a double-precision floating-point strided array `x`, ignoring `NaN` values and using a two-pass error correction algorithm.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanmeanpn( x.length, x, 1 );
// returns ~0.3333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [arithmetic mean][arithmetic-mean] of every other element in `x`,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ] );

var v = dnanmeanpn( 5, x, 2 );
// returns 1.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dnanmeanpn( 5, x1, 2 );
// returns 1.25
```

#### dnanmeanpn.ndarray( N, x, strideX, offsetX )

Computes the [arithmetic mean][arithmetic-mean] of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanmeanpn.ndarray( x.length, x, 1, 0 );
// returns ~0.33333
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [arithmetic mean][arithmetic-mean] for every other element in `x` starting from the second element

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );

var v = dnanmeanpn.ndarray( 5, x, 2, 1 );
// returns 1.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   If every indexed element is `NaN`, both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var dnanmeanpn = require( '@stdlib/stats/strided/dnanmeanpn' );

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( randu() * 10.0 );
    }
}
console.log( x );

var v = dnanmeanpn( x.length, x, 1 );
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
#include "stdlib/stats/strided/dnanmeanpn.h"
```

#### stdlib_strided_dnanmeanpn( N, \*X, strideX )

Computes arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.

```c
const double x[] = { 1.0, 2.0, 0.0/0.0, 3.0, 0.0/0.0, 4.0, 5.0, 6.0, 0.0/0.0, 7.0, 8.0, 0.0/0.0 };

double v = stdlib_strided_dnanmeanpn( 6, x, 2 );
// returns ~4.6667
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
double stdlib_strided_dnanmeanpn( const CBLAS_INT N, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dnanmeanpn_ndarray( N, \*X, strideX, offsetX )

Computes the aithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm and alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 0.0/0.0, 3.0, 0.0/0.0, 4.0, 5.0, 6.0, 0.0/0.0, 7.0, 8.0, 0.0/0.0 };

double v = stdlib_strided_dnanmeanpn( 6, x, 2, 0 );
// returns ~4.6667
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
double stdlib_strided_dnanmeanpn_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/stats/strided/dnanmeanpn.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 0.0/0.0, 3.0, 0.0/0.0, 4.0, 5.0, 6.0, 0.0/0.0, 7.0, 8.0, 0.0/0.0 };

    // Specify the number of elements:
    const int N = 6;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the arithmetic mean:
    double v = stdlib_strided_dnanmeanpn( N, x, strideX );

    // Print the result:
    printf( "mean: %lf\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

## References

-   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958][@neely:1966a].
-   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036][@schubert:2018a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dmeanpn`][@stdlib/stats/strided/dmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a two-pass error correction algorithm.</span>
-   <span class="package-name">[`@stdlib/stats/strided/dnanmean`][@stdlib/stats/strided/dnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/nanmeanpn`][@stdlib/stats/strided/nanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring NaN values and using a two-pass error correction algorithm.</span>
-   <span class="package-name">[`@stdlib/stats/strided/snanmeanpn`][@stdlib/stats/strided/snanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring NaN values and using a two-pass error correction algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@neely:1966a]: https://doi.org/10.1145/365719.365958

[@schubert:2018a]: https://doi.org/10.1145/3221269.3223036

<!-- <related-links> -->

[@stdlib/stats/strided/dmeanpn]: https://github.com/stdlib-js/stats/tree/main/strided/dmeanpn

[@stdlib/stats/strided/dnanmean]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmean

[@stdlib/stats/strided/nanmeanpn]: https://github.com/stdlib-js/stats/tree/main/strided/nanmeanpn

[@stdlib/stats/strided/snanmeanpn]: https://github.com/stdlib-js/stats/tree/main/strided/snanmeanpn

<!-- </related-links> -->

</section>

<!-- /.links -->
