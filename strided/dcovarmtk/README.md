<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

<!-- lint disable maximum-heading-length -->

# dcovarmtk

> Calculate the [covariance][covariance] of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.

<section class="intro">

The population [covariance][covariance] of two finite size populations of size `N` is given by

<!-- <equation class="equation" label="eq:population_covariance" align="center" raw="\operatorname{\mathrm{cov_N}} = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu_x)(y_i - \mu_y)" alt="Equation for the population covariance."> -->

```math
\mathop{\mathrm{cov_N}} = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu_x)(y_i - \mu_y)
```

<!-- </equation> -->

where the population means are given by

<!-- <equation class="equation" label="eq:population_mean_for_x" align="center" raw="\mu_x = \frac{1}{N} \sum_{i=0}^{N-1} x_i" alt="Equation for the population mean for first array."> -->

```math
\mu_x = \frac{1}{N} \sum_{i=0}^{N-1} x_i
```

<!-- </equation> -->

and

<!-- <equation class="equation" label="eq:population_mean_for_y" align="center" raw="\mu_y = \frac{1}{N} \sum_{i=0}^{N-1} y_i" alt="Equation for the population mean for second array."> -->

```math
\mu_y = \frac{1}{N} \sum_{i=0}^{N-1} y_i
```

<!-- </equation> -->

Often in the analysis of data, the true population [covariance][covariance] is not known _a priori_ and must be estimated from samples drawn from population distributions. If one attempts to use the formula for the population [covariance][covariance], the result is biased and yields a **biased sample covariance**. To compute an **unbiased sample covariance** for samples of size `n`,

<!-- <equation class="equation" label="eq:unbiased_sample_covariance" align="center" raw="\operatorname{\mathrm{cov_n}} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)" alt="Equation for computing an unbiased sample variance."> -->

```math
\mathop{\mathrm{cov_n}} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)
```

<!-- </equation> -->

where sample means are given by

<!-- <equation class="equation" label="eq:sample_mean_for_x" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the sample mean for first array."> -->

```math
\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- </equation> -->

and

<!-- <equation class="equation" label="eq:sample_mean_for_y" align="center" raw="\bar{y} = \frac{1}{n} \sum_{i=0}^{n-1} y_i" alt="Equation for the sample mean for second array."> -->

```math
\bar{y} = \frac{1}{n} \sum_{i=0}^{n-1} y_i
```

<!-- </equation> -->

The use of the term `n-1` is commonly referred to as Bessel's correction. Depending on the characteristics of the population distributions, other correction factors (e.g., `n-1.5`, `n+1`, etc) can yield better estimators.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcovarmtk = require( '@stdlib/stats/strided/dcovarmtk' );
```

#### dcovarmtk( N, correction, meanx, x, strideX, meany, y, strideY )

Computes the [covariance][covariance] of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( [ 2.0, -2.0, 1.0 ] );

var v = dcovarmtk( x.length, 1, 1.0/3.0, x, 1, 1.0/3.0, y, 1 );
// returns ~3.8333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [covariance][covariance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the population [covariance][covariance], setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample [covariance][covariance], setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
-   **meanx**: mean of `x`.
-   **x**: first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **meany**: mean of `y`.
-   **y**: second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the [covariance][covariance] of every other element in `x` and `y`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float64Array( [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = dcovarmtk( 4, 1, 1.25, x, 2, 1.25, y, 2 );
// returns 5.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( [ 2.0, -2.0, 2.0, 1.0, -2.0, 4.0, 3.0, 2.0 ] );

var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dcovarmtk( 4, 1, 1.25, x1, 2, 1.25, y1, 2 );
// returns ~1.9167
```

#### dcovarmtk.ndarray( N, correction, meanx, x, strideX, offsetX, meany, y, strideY, offsetY )

Computes the [covariance][covariance] of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( [ 2.0, -2.0, 1.0 ] );

var v = dcovarmtk.ndarray( x.length, 1, 1.0/3.0, x, 1, 0, 1.0/3.0, y, 1, 0 );
// returns ~3.8333
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the [covariance][covariance] for every other element in `x` and `y` starting from the second element

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y = new Float64Array( [ -7.0, 2.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = dcovarmtk.ndarray( 4, 1, 1.25, x, 2, 1, 1.25, y, 2, 1 );
// returns 6.0
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
var dcovarmtk = require( '@stdlib/stats/strided/dcovarmtk' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -50, 50, opts );
console.log( x );

var y = discreteUniform( 10, -50, 50, opts );
console.log( y );

var v = dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, y, 1 );
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
#include "stdlib/stats/strided/dcovarmtk.h"
```

#### stdlib_strided_dcovarmtk( N, correction, meanx, \*X, strideX, meany, \*Y, strideY )

Computes the [covariance][covariance] of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.

```c
const double x[] = { 1.0, -2.0, 2.0 };
const double y[] = { 2.0, -2.0, 1.0 };

double v = stdlib_strided_dcovarmtk( 3, 1.0, 1.0/3.0, x, 1, 1.0/3.0, y, 1 );
// returns ~3.8333
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **correction**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [covariance][covariance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the population [covariance][covariance], setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample [covariance][covariance], setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
-   **meanx**: `[in] double` mean of `X`.
-   **X**: `[in] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **meany**: `[in] double` mean of `Y`.
-   **Y**: `[in] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
double stdlib_strided_dcovarmtk( const CBLAS_INT N, const double correction, const double meanx, const double *X, const CBLAS_INT strideX, const double meany, const double *Y, const CBLAS_INT strideY );
```

#### stdlib_strided_dcovarmtk_ndarray( N, correction, meanx, \*X, strideX, offsetX, meany, \*Y, strideY, offsetY )

Computes the [covariance][covariance] of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm and alternative indexing semantics.

```c
const double x[] = { 1.0, -2.0, 2.0 };
const double y[] = { 2.0, -2.0, 1.0 };

double v = stdlib_strided_dcovarmtk_ndarray( 3, 1.0, 1.0/3.0, x, 1, 0, 1.0/3.0, y, 1, 0 );
// returns ~3.8333
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **correction**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [covariance][covariance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the population [covariance][covariance], setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample [covariance][covariance], setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
-   **meanx**: `[in] double` mean of `X`.
-   **X**: `[in] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **meany**: `[in] double` mean of `Y`.
-   **Y**: `[in] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
double stdlib_strided_dcovarmtk_ndarray( const CBLAS_INT N, const double correction, const double meanx, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double meany, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
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
#include "stdlib/stats/strided/dcovarmtk.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the covariance of `x` with itself:
    double v = stdlib_strided_dcovarmtk( N, 1.0, 4.5, x, strideX, 4.5, x, -strideX );

    // Print the result:
    printf( "covariance: %lf\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[covariance]: https://en.wikipedia.org/wiki/Covariance

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
