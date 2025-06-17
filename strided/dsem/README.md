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

# dsem

> Calculate the [standard error of the mean][standard-error] of a double-precision floating-point strided array.

<section class="intro">

The [standard error of the mean][standard-error] of a finite size sample of size `n` is given by

<!-- <equation class="equation" label="eq:standard_error_of_the_mean" align="center" raw="\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}" alt="Equation for the standard error of the mean."> -->

```math
\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}
```

<!-- <div class="equation" align="center" data-raw-text="\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}" data-equation="eq:standard_error_of_the_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@227a94a6f2e49efe65e814f2da7bc9b9c2bec9b9/lib/node_modules/@stdlib/stats/strided/dsem/docs/img/equation_standard_error_of_the_mean.svg" alt="Equation for the standard error of the mean.">
    <br>
</div> -->

<!-- </equation> -->

where `σ` is the population [standard deviation][standard-deviation].

Often in the analysis of data, the true population [standard deviation][standard-deviation] is not known _a priori_ and must be estimated from a sample drawn from the population distribution. In this scenario, one must use a sample [standard deviation][standard-deviation] to compute an estimate for the [standard error of the mean][standard-error]

<!-- <equation class="equation" label="eq:standard_error_of_the_mean_estimate" align="center" raw="\sigma_{\bar{x}} \approx \frac{s}{\sqrt{n}}" alt="Equation for estimating the standard error of the mean."> -->

```math
\sigma_{\bar{x}} \approx \frac{s}{\sqrt{n}}
```

<!-- <div class="equation" align="center" data-raw-text="\sigma_{\bar{x}} \approx \frac{s}{\sqrt{n}}" data-equation="eq:standard_error_of_the_mean_estimate">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@227a94a6f2e49efe65e814f2da7bc9b9c2bec9b9/lib/node_modules/@stdlib/stats/strided/dsem/docs/img/equation_standard_error_of_the_mean_estimate.svg" alt="Equation for estimating the standard error of the mean.">
    <br>
</div> -->

<!-- </equation> -->

where `s` is the sample [standard deviation][standard-deviation].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dsem = require( '@stdlib/stats/strided/dsem' );
```

#### dsem( N, correction, x, strideX )

Computes the [standard error of the mean][standard-error] of a double-precision floating-point strided array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dsem( x.length, 1, x, 1 );
// returns ~1.20185
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [standard deviation][standard-deviation] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the [standard deviation][standard-deviation] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample [standard deviation][standard-deviation], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [standard error of the mean][standard-error] of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = dsem( 4, 1, x, 2 );
// returns 1.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dsem( 4, 1, x1, 2 );
// returns 1.25
```

#### dsem.ndarray( N, correction, x, strideX, offsetX )

Computes the [standard error of the mean][standard-error] of a double-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dsem.ndarray( x.length, 1, x, 1, 0 );
// returns ~1.20185
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [standard error of the mean][standard-error] for every other element in `x` starting from the second element

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = dsem.ndarray( 4, 1, x, 2, 1 );
// returns 1.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   If `N - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment), both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dsem = require( '@stdlib/stats/strided/dsem' );

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
console.log( x );

var v = dsem( x.length, 1, x, 1 );
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
#include "stdlib/stats/strided/dsem.h"
```

#### stdlib_strided_dsem( N, correction, \*X, strideX )

Computes the [standard error of the mean][standard-error] of a double-precision floating-point strided array.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

double v = stdlib_strided_dsem( 4, 1.0, x, 2 );
// returns ~1.29099
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **correction**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [standard deviation][standard-deviation] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the [standard deviation][standard-deviation] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample [standard deviation][standard-deviation], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
double stdlib_strided_dsem( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dsem_ndarray( N, correction, \*X, strideX, offsetX )

Computes the [standard error of the mean][standard-error] of a double-precision floating-point strided array using alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

double v = stdlib_strided_dsem_ndarray( 4, 1.0, x, 2, 0 );
// returns ~1.29099
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **correction**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [standard deviation][standard-deviation] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the [standard deviation][standard-deviation] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample [standard deviation][standard-deviation], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
double stdlib_strided_dsem_ndarray( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/stats/strided/dsem.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the standard error of the mean:
    double v = stdlib_strided_dsem( N, 1.0, x, strideX );

    // Print the result:
    printf( "dsem: %lf\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dstdev`][@stdlib/stats/strided/dstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-error]: https://en.wikipedia.org/wiki/Standard_error

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dstdev]: https://github.com/stdlib-js/stats/tree/main/strided/dstdev

<!-- </related-links> -->

</section>

<!-- /.links -->
