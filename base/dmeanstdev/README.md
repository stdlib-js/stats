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

<!--lint disable maximum-heading-length-->

# dmeanstdev

> Calculate the [mean][arithmetic-mean] and [standard deviation][standard-deviation] of a double-precision floating-point strided array.

<section class="intro">

The population [standard deviation][standard-deviation] of a finite size population of size `N` is given by

<!-- <equation class="equation" label="eq:population_standard_deviation" align="center" raw="\sigma = \sqrt{\frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2}" alt="Equation for the population standard deviation."> -->

```math
\sigma = \sqrt{\frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2}
```

<!-- <div class="equation" align="center" data-raw-text="\sigma = \sqrt{\frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2}" data-equation="eq:population_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@fc1d35912f15aaa6bfb58aadc07a842b1239c98c/lib/node_modules/@stdlib/stats/base/dmeanstdev/docs/img/equation_population_standard_deviation.svg" alt="Equation for the population standard deviation.">
    <br>
</div> -->

<!-- </equation> -->

where the population mean is given by

<!-- <equation class="equation" label="eq:population_mean" align="center" raw="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" alt="Equation for the population mean."> -->

```math
\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" data-equation="eq:population_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@fc1d35912f15aaa6bfb58aadc07a842b1239c98c/lib/node_modules/@stdlib/stats/base/dmeanstdev/docs/img/equation_population_mean.svg" alt="Equation for the population mean.">
    <br>
</div> -->

<!-- </equation> -->

Often in the analysis of data, the true population [standard deviation][standard-deviation] is not known _a priori_ and must be estimated from a sample drawn from the population distribution. If one attempts to use the formula for the population [standard deviation][standard-deviation], the result is biased and yields an **uncorrected sample standard deviation**. To compute a **corrected sample standard deviation** for a sample of size `n`,

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2}" alt="Equation for computing a corrected sample standard deviation."> -->

```math
s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2}
```

<!-- <div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@fc1d35912f15aaa6bfb58aadc07a842b1239c98c/lib/node_modules/@stdlib/stats/base/dmeanstdev/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for computing a corrected sample standard deviation.">
    <br>
</div> -->

<!-- </equation> -->

where the sample mean is given by

<!-- <equation class="equation" label="eq:sample_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the sample mean."> -->

```math
\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:sample_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@fc1d35912f15aaa6bfb58aadc07a842b1239c98c/lib/node_modules/@stdlib/stats/base/dmeanstdev/docs/img/equation_sample_mean.svg" alt="Equation for the sample mean.">
    <br>
</div> -->

<!-- </equation> -->

The use of the term `n-1` is commonly referred to as Bessel's correction. Note, however, that applying Bessel's correction can increase the mean squared error between the sample standard deviation and population standard deviation. Depending on the characteristics of the population distribution, other correction factors (e.g., `n-1.5`, `n+1`, etc) can yield better estimators.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmeanstdev = require( '@stdlib/stats/base/dmeanstdev' );
```

#### dmeanstdev( N, correction, x, strideX, out, strideOut )

Computes the [mean][arithmetic-mean] and [standard deviation][standard-deviation] of a double-precision floating-point strided array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var out = new Float64Array( 2 );

var v = dmeanstdev( x.length, 1, x, 1, out, 1 );
// returns <Float64Array>[ ~0.3333, ~2.0817 ]

var bool = ( v === out );
// returns true
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [standard deviation][standard-deviation] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the [standard deviation][standard-deviation] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample [standard deviation][standard-deviation], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **out**: output [`Float64Array`][@stdlib/array/float64] for storing results.
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [standard deviation][standard-deviation] of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var out = new Float64Array( 2 );

var v = dmeanstdev( 4, 1, x, 2, out, 1 );
// returns <Float64Array>[ 1.25, 2.5 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out0 = new Float64Array( 4 );
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var v = dmeanstdev( 4, 1, x1, 2, out1, 1 );
// returns <Float64Array>[ 1.25, 2.5 ]
```

#### dmeanstdev.ndarray( N, correction, x, strideX, offsetX, out, strideOut, offsetOut )

Computes the [mean][arithmetic-mean] and [standard deviation][standard-deviation] of a double-precision floating-point strided array and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var out = new Float64Array( 2 );

var v = dmeanstdev.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
// returns <Float64Array>[ ~0.3333, ~2.0817 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the [mean][arithmetic-mean] and [standard deviation][standard-deviation] for every other element in `x` starting from the second element

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var out = new Float64Array( 4 );

var v = dmeanstdev.ndarray( 4, 1, x, 2, 1, out, 2, 1 );
// returns <Float64Array>[ 0.0, 1.25, 0.0, 2.5 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return a [mean][arithmetic-mean] and [standard deviation][standard-deviation] equal to `NaN`.
-   If `N - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment), both functions return a [standard deviation][standard-deviation] equal to `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Float64Array = require( '@stdlib/array/float64' );
var dmeanstdev = require( '@stdlib/stats/base/dmeanstdev' );

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
console.log( x );

var out = new Float64Array( 2 );
dmeanstdev( x.length, 1, x, 1, out, 1 );
console.log( out );
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
#include "stdlib/stats/base/dmeanstdev.h"
```

#### stdlib_strided_dmeanstdev( N, correction, \*X, strideX, \*Out, strideOut )

Computes the [mean][arithmetic-mean] and [standard deviation][standard-deviation] of a double-precision floating-point strided array.

```c
const double x[] = { 1.0, -2.0, 2.0 };
double out[] = { 0.0, 0.0 };

stdlib_strided_dmeanstdev( 4, 1.0, x, 1, out, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **correction**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [standard deviation][standard-deviation] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the [standard deviation][standard-deviation] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample [standard deviation][standard-deviation], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Out**: `[out] double*` output array.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.

```c
void stdlib_strided_dmeanstdev( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, double *Out, const CBLAS_INT strideOut );
```

#### stdlib_strided_dmeanstdev_ndarray( N, correction, \*X, strideX, offsetX, \*Out, strideOut, offsetOut )

Computes the [mean][arithmetic-mean] and [standard deviation][standard-deviation] of a double-precision floating-point strided array using alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
double out[] = { 0.0, 0.0 };

stdlib_strided_dmeanstdev_ndarray( 4, 1.0, x, 2, 0, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **correction**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [standard deviation][standard-deviation] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the [standard deviation][standard-deviation] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample [standard deviation][standard-deviation], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Out**: `[out] double*` output array.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.
-   **offsetOut**: `[in] CBLAS_INT` starting index for `Out`.

```c
void stdlib_strided_dmeanstdev_ndarray( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut );
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
#include "stdlib/stats/base/dmeanstdev.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Create an output array:
    double out[] = { 0.0, 0.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;
    const int strideOut = 1;

    // Compute the mean and standard deviation:
    stdlib_strided_dmeanstdev( N, 1.0, x, strideX, out, strideOut );

    // Print the result:
    printf( "sample mean: %lf\n", out[ 0 ] );
    printf( "sample standard deviation: %lf\n", out[ 1 ] );
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dmean`][@stdlib/stats/strided/dmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/dmeanvar`][@stdlib/stats/base/dmeanvar]</span><span class="delimiter">: </span><span class="description">calculate the mean and variance of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/dstdev`][@stdlib/stats/strided/dstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dmean]: https://github.com/stdlib-js/stats/tree/main/strided/dmean

[@stdlib/stats/base/dmeanvar]: https://github.com/stdlib-js/stats/tree/main/base/dmeanvar

[@stdlib/stats/strided/dstdev]: https://github.com/stdlib-js/stats/tree/main/strided/dstdev

<!-- </related-links> -->

</section>

<!-- /.links -->
