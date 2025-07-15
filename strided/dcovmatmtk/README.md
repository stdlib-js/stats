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

# dcovmatmtk

> Compute the [covariance matrix][covariance-matrix] for an `M` by `N` double-precision floating-point matrix `A` and assign the results to a matrix `B` when provided known means and using a one-pass textbook algorithm.

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

Given a matrix **X** containing `K` data vectors `X_i`, a [covariance matrix][covariance-matrix] (also known as the **auto-covariance matrix**, **dispersion matrix**, **variance matrix**, or **variance-covariance matrix**) is a square matrix containing the [covariance][covariance] `cov(X_i,X_j)` between each pair of data vectors for `0 <= i < K` and `0 <= j < K`.

<!-- <equation class="equation" label="eq:covariance_matrix" align="center" raw="\operatorname{cov}(\mathbf{X}) = \begin{bmatrix} \operatorname{var}(X_0,X_0) & \operatorname{cov}(X_0,X_1) & \ldots & \operatorname{cov}(X_0,X_K) \\ \operatorname{cov}(X_1,X_0) & \operatorname{var}(X_1,X_1) & \ldots & \operatorname{cov}(X_1,X_K) \\ \vdots & \vdots & \ddots & \vdots \\ \operatorname{cov}(X_K,X_0) & \operatorname{cov}(X_K,X_1) & \ldots & \operatorname{var}(X_K,X_K) \\ \end{bmatrix}" alt="Equation for covariance matrix."> -->

```math
\mathop{\mathrm{cov}}(\mathbf{X}) = \begin{bmatrix}
\mathop{\mathrm{var}}(X_0,X_0) & \mathop{\mathrm{cov}}(X_0,X_1) & \ldots & \mathop{\mathrm{cov}}(X_0,X_K) \\
\mathop{\mathrm{cov}}(X_1,X_0) & \mathop{\mathrm{var}}(X_1,X_1) & \ldots & \mathop{\mathrm{cov}}(X_1,X_K) \\
\vdots & \vdots & \ddots & \vdots \\
\mathop{\mathrm{cov}}(X_K,X_0) & \mathop{\mathrm{cov}}(X_K,X_1) & \ldots & \mathop{\mathrm{var}}(X_K,X_K) \\
\end{bmatrix}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcovmatmtk = require( '@stdlib/stats/strided/dcovmatmtk' );
```

#### dcovmatmtk( order, orient, uplo, M, N, correction, means, strideM, A, LDA, B, LDB )

Computes the [covariance matrix][covariance-matrix] for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Define a 2x3 matrix in which variables are stored along rows in row-major order:
var A = new Float64Array([
    1.0, -2.0, 2.0,
    2.0, -2.0, 1.0
]);

// Define a vector of known means:
var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );

// Allocate a 2x2 output matrix:
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

// Perform operation:
var out = dcovmatmtk( 'row-major', 'rows', 'full', 2, 3, 1, means, 1, A, 3, B, 2 );
// returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]

var bool = ( B === out );
// returns true
```

The function has the following parameters:

-   **order**: storage layout.
-   **orient**: specifies whether variables are stored along columns or along rows.
-   **uplo**: specifies whether to overwrite the upper or lower triangular part of `B`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [covariance][covariance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the population [covariance][covariance], setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample [covariance][covariance], setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
-   **means**: [`Float64Array`][@stdlib/array/float64] containing known means.
-   **strideM**: stride length for `means`.
-   **A**: input matrix stored in linear memory as a [`Float64Array`][@stdlib/array/float64].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: output matrix stored in linear memory as a [`Float64Array`][@stdlib/array/float64].
-   **LDB**: stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

The stride parameters determine which elements in the arrays are accessed at runtime. For example, to iterate over the elements of `means` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array([
    1.0, -2.0, 2.0,
    2.0, -2.0, 1.0
]);

var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

var out = dcovmatmtk( 'row-major', 'rows', 'full', 2, 3, 1, means, -1, A, 3, B, 2 );
// returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A0 = new Float64Array([
    0.0, 0.0, 0.0,
    1.0, -2.0, 2.0,
    2.0, -2.0, 1.0
]);

var means0 = new Float64Array( [ 0.0, 1.0/3.0, 1.0/3.0 ] );
var B0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var A1 = new Float64Array( A0.buffer, A0.BYTES_PER_ELEMENT*3 );
var means1 = new Float64Array( means0.buffer, means0.BYTES_PER_ELEMENT*1 );
var B1 = new Float64Array( B0.buffer, B0.BYTES_PER_ELEMENT*2 );

var out = dcovmatmtk( 'row-major', 'rows', 'full', 2, 3, 1, means1, 1, A1, 3, B1, 2 );
// B0 => <Float64Array>[ 0.0, 0.0, ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
```

#### dcovmatmtk.ndarray( orient, uplo, M, N, c, means, sm, om, A, sa1, sa2, oa, B, sb1, sb2, ob )

Computes the [covariance matrix][covariance-matrix] for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Define a 2x3 matrix in which variables are stored along rows in row-major order:
var A = new Float64Array([
    1.0, -2.0, 2.0,
    2.0, -2.0, 1.0
]);

// Define a vector of known means:
var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );

// Allocate a 2x2 output matrix:
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

// Perform operation:
var out = dcovmatmtk.ndarray( 'rows', 'full', 2, 3, 1, means, 1, 0, A, 3, 1, 0, B, 2, 1, 0 );
// returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]

var bool = ( B === out );
// returns true
```

The function has the following parameters:

-   **orient**: specifies whether variables are stored along columns or along rows.
-   **uplo**: specifies whether to overwrite the upper or lower triangular part of `B`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **c**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [covariance][covariance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the population [covariance][covariance], setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample [covariance][covariance], setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
-   **means**: [`Float64Array`][@stdlib/array/float64] containing known means.
-   **sm**: stride length for `means`.
-   **om**: starting index for `means`.
-   **A**: input matrix stored in linear memory as a [`Float64Array`][@stdlib/array/float64].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **B**: output matrix stored in linear memory as a [`Float64Array`][@stdlib/array/float64].
-   **sb1**: stride of the first dimension of `B`.
-   **sb2**: stride of the second dimension of `B`.
-   **ob**: starting index for `B`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array([
    0.0, 0.0, 0.0,
    1.0, -2.0, 2.0,
    2.0, -2.0, 1.0
]);

var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var out = dcovmatmtk.ndarray( 'rows', 'full', 2, 3, 1, means, -1, 1, A, 3, 1, 3, B, 2, 1, 2 );
// B => <Float64Array>[ 0.0, 0.0, ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When `orient = 'columns'`,

    -   each column in `A` represents a variable and each row in `A` represents an observation.
    -   `B` should be an `N` by `N` matrix.
    -   the list of known means should be an `N` element vector.

-   When `orient = 'rows'`,

    -   each row in `A` represents a variable and each column in `A` represents an observation.
    -   `B` should be an `M` by `M` matrix.
    -   the list of known means should be an `M` element vector.

-   If `M` or `N` is equal to `0`, both functions return `B` unchanged.

-   If `N - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment), both functions set the elements of `B` to `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var strided2array2d = require( '@stdlib/array/base/strided2array2d' );
var dcovmatmtk = require( '@stdlib/stats/strided/dcovmatmtk' );

// Define a 4x3 matrix in which variables are stored along rows in row-major order:
var A = new Float64Array([
    1.0, -2.0, 2.0,
    2.0, -2.0, 1.0,
    2.0, -2.0, 1.0,
    1.0, -2.0, 2.0
]);

// Define a vector of known means:
var means = new Float64Array( [ 1.0/3.0, 1.0/3.0, 1.0/3.0, 1.0/3.0 ] );

// Allocate a 4x4 output matrix:
var B = new Float64Array( 4*4 );

var out = dcovmatmtk.ndarray( 'rows', 'full', 4, 3, 1, means, 1, 0, A, 3, 1, 0, B, 4, 1, 0 );
// returns <Float64Array>[ ~4.33, ~3.83, ~3.83, ~4.33, ~3.83, ~4.33, ~4.33, ~3.83, ~3.83, ~4.33, ~4.33, ~3.83, ~4.33, ~3.83, ~3.83, ~4.33 ]

console.log( strided2array2d( out, [ 4, 4 ], [ 4, 1 ], 0 ) );
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
#include "stdlib/stats/strided/dcovmatmtk.h"
```

#### stdlib_strided_dcovmatmtk( order, orient, uplo, M, N, correction, \*Means, strideM, \*A, LDA, \*B, LDB )

Computes the [covariance matrix][covariance-matrix] for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm.

```c
#include "stdlib/blas/base/shared.h"

// Define a 2x3 matrix in which variables are stored along rows in row-major order:
const double A[] = { 1.0, -2.0, 2.0, 2.0, -2.0, 1.0 };

// Define a vector of known means:
const double means[] = { 1.0/3.0, 1.0/3.0 };

// Allocate a 2x2 output matrix:
double B[] = { 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_dcovmatmtk( CblasRowMajor, CblasRows, -1, 2, 3, 1.0, means, 1, A, 3, B, 2 );
```

The function accepts the following arguments:

-   **order**: `[in] CBLAS_LAYOUT` storage layout.
-   **orient**: `[in] CBLAS_ORIENT` specifies whether variables are stored along columns or along rows.
-   **uplo**: `[in] int` specifies whether to overwrite the upper or lower triangular part of `B`.
-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **correction**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [covariance][covariance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the population [covariance][covariance], setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample [covariance][covariance], setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
-   **Means**: `[in] double*` vector containing known means.
-   **strideM**: `[in] CBLAS_INT` stride length for `Means`.
-   **A**: `[in] double*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: `[out] double*` output matrix.
-   **LDB**: `[in] CBLAS_INT` stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

```c
void stdlib_strided_dcovmatmtk( const CBLAS_LAYOUT layout, const CBLAS_ORIENT orient, const int uplo, const CBLAS_INT M, const CBLAS_INT N, const double correction, const double *means, const CBLAS_INT strideM, const double *A, const CBLAS_INT LDA, double *B, const CBLAS_INT LDB );
```

#### stdlib_strided_dcovmatmtk_ndarray( orient,uplo, M,N, c, \*Means,sm,om, \*A,sa1,sa2,oa, \*B,sb1,sb2,ob )

Computes the [covariance matrix][covariance-matrix] for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm and alternative indexing semantics.

```c
#include "stdlib/blas/base/shared.h"

// Define a 2x3 matrix in which variables are stored along rows in row-major order:
const double A[] = { 1.0, -2.0, 2.0, 2.0, -2.0, 1.0 };

// Define a vector of known means:
const double means[] = { 1.0/3.0, 1.0/3.0 };

// Allocate a 2x2 output matrix:
double B[] = { 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_dcovmatmtk_ndarray( CblasRows, -1, 2, 3, 1.0, means, 1, 0, A, 3, 1, 0, B, 2, 1, 0 );
```

The function accepts the following arguments:

-   **orient**: `[in] CBLAS_ORIENT` specifies whether variables are stored along columns or along rows.
-   **uplo**: `[in] int` specifies whether to overwrite the upper or lower triangular part of `B`.
-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **c**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [covariance][covariance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the population [covariance][covariance], setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample [covariance][covariance], setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
-   **Means**: `[in] double*` vector containing known means.
-   **sm**: `[in] CBLAS_INT` stride length for `Means`.
-   **om**: `[in] CBLAS_INT` starting index for `Means`.
-   **A**: `[in] double*` input matrix.
-   **sa1**: `[in] CBLAS_INT` stride of the first dimension of `A`.
-   **sa2**: `[in] CBLAS_INT` stride of the second dimension of `A`.
-   **oa**: `[in] CBLAS_INT` starting index for `A`.
-   **B**: `[out] double*` output matrix.
-   **sb1**: `[in] CBLAS_INT` stride of the first dimension of `B`.
-   **sb2**: `[in] CBLAS_INT` stride of the second dimension of `B`.
-   **ob**: `[in] CBLAS_INT` starting index for `B`.

```c
void stdlib_strided_dcovmatmtk_ndarray( const CBLAS_ORIENT orient, const int uplo, const CBLAS_INT M, const CBLAS_INT N, const double correction, const double *means, const CBLAS_INT strideM, const CBLAS_INT offsetM, const double *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, double *B, const CBLAS_INT strideB1, const CBLAS_INT strideB2, const CBLAS_INT offsetB );
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
#include "stdlib/stats/strided/dcovmatmtk.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
   // Define a 4x3 matrix in which variables are stored along rows in row-major order:
    const double A[] = {
        1.0, -2.0, 2.0,
        2.0, -2.0, 1.0,
        2.0, -2.0, 1.0,
        1.0, -2.0, 2.0
    };

    // Define a vector of known means:
    const double means[] = { 1.0/3.0, 1.0/3.0, 1.0/3.0, 1.0/3.0 };

    // Allocate a 4x4 output matrix:
    double B[] = {
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0
    };

    stdlib_strided_dcovmatmtk( CblasRowMajor, CblasRows, -1, 4, 3, 1.0, means, 1, A, 3, B, 4 );

    // Print the result:
    for ( int i = 0; i < 4; i++ ) {
        for ( int j = 0; j < 4; j++ ) {
            printf( "B[ %i, %i ] = %lf\n", i, j, B[ (i*4)+j ] );
        }
    }
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

[covariance-matrix]: https://en.wikipedia.org/wiki/Covariance_matrix

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
