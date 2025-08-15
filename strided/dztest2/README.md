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

<!-- lint disable max-heading-length -->

# dztest2

> Compute a two-sample Z-test for two double-precision floating-point strided arrays.

<section class="intro">

A Z-test commonly refers to a two-sample location test which compares the means of two independent sets of measurements `X` and `Y` when the population standard deviations are known. A Z-test supports testing three different null hypotheses `H0`:

-   `H0: μX - μY ≥ Δ` versus the alternative hypothesis `H1: μX - μY < Δ`.
-   `H0: μX - μY ≤ Δ` versus the alternative hypothesis `H1: μX - μY > Δ`.
-   `H0: μX - μY = Δ` versus the alternative hypothesis `H1: μX - μY ≠ Δ`.

Here, `μX` and `μY` are the true population means of samples `X` and `Y`, respectively, and `Δ` is the hypothesized difference in means (typically `0` by default).

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dztest2 = require( '@stdlib/stats/strided/dztest2' );
```

#### dztest2( NX, NY, alternative, alpha, diff, sigmax, x, strideX, sigmay, y, strideY, out )

Computes a two-sample Z-test for two double-precision floating-point strided arrays.

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var y = new Float64Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );

var results = new Results();
var out = dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following parameters:

-   **NX**: number of indexed elements in `x`.
-   **NY**: number of indexed elements in `y`.
-   **alternative**: [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: significance level.
-   **diff**: difference in means under the null hypothesis.
-   **sigmax**: known standard deviation of `x`.
-   **x**: first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **sigmay**: known standard deviation of `y`.
-   **y**: second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: stride length for `y`.
-   **out**: output [results object][@stdlib/stats/base/ztest/two-sample/results/float64].

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to perform a two-sample Z-test over every other element in `x` and `y`,

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0, 0.0 ] );
var y = new Float64Array( [ 3.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0, 7.0, 0.0 ] );

var results = new Results();
var out = dztest2( 5, 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, 2.0, y, 2, results );
// returns {...}

var bool = ( out === results );
// returns true
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 0.0, 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var y0 = new Float64Array( [ 0.0, 3.0, 3.0, 5.0, 7.0, 7.0 ] );
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var results = new Results();
var out = dztest2( 5, 5, 'two-sided', 0.05, 0.0, 1.0, x1, 1, 2.0, y1, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

#### dztest2.ndarray( NX, NY, alternative, alpha, diff, sigmax, x, strideX, offsetX, sigmay, y, strideY, offsetY, out )

Computes a two-sample Z-test for two double-precision floating-point strided arrays using alternative indexing semantics.

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var y = new Float64Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );

var results = new Results();
var out = dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to perform a two-sample Z-test over every other element in `x` and `y` starting from the second element

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 0.0, 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0 ] );
var y = new Float64Array( [ 0.0, 3.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0, 7.0 ] );

var results = new Results();
var out = dztest2.ndarray( 5, 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, 1, 2.0, y, 2, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   As a general rule of thumb, a Z-test is most reliable when `N >= 50`. For smaller sample sizes or when the standard deviations are unknown, prefer a t-test.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var normal = require( '@stdlib/random/array/normal' );
var dztest2 = require( '@stdlib/stats/strided/dztest2' );

var x = normal( 1000, 4.0, 2.0, {
    'dtype': 'float64'
});
var y = normal( 800, 3.0, 2.0, {
    'dtype': 'float64'
});

var results = new Results();
var out = dztest2( x.length, y.length, 'two-sided', 0.05, 1.0, 2.0, x, 1, 2.0, y, 1, results );
// returns {...}

console.log( out.toString() );
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
#include "stdlib/stats/strided/dztest2.h"
```

#### stdlib_strided_dztest2( NX, NY, alternative, alpha, diff, sigmax, \*X, strideX, sigmay, \*Y, strideY, \*results )

Computes a two-sample Z-test for two double-precision floating-point strided arrays.

```c
#include "stdlib/stats/base/ztest/two-sample/results/float64.h"
#include "stdlib/stats/base/ztest/alternatives.h"

struct stdlib_stats_ztest_two_sample_float64_results results = {
    .rejected = false,
    .alpha = 0.0,
    .alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
    .pValue = 0.0,
    .statistic = 0.0,
    .ci = { 0.0, 0.0 },
    .nullValue = 0.0,
    .xmean = 0.0,
    .ymean = 0.0
};

const double x[] = { 4.0, 4.0, 6.0, 6.0, 5.0 };
const double y[] = { 3.0, 3.0, 5.0, 7.0, 7.0 };

stdlib_strided_dztest2( 5, 5, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, &results );
```

The function accepts the following arguments:

-   **NX**: `[in] CBLAS_INT` number of indexed elements in `x`.
-   **NY**: `[in] CBLAS_INT` number of indexed elements in `y`.
-   **alternative**: `[in] enum STDLIB_STATS_ZTEST_ALTERNATIVE` [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: `[in] double` significance level.
-   **diff**: `[in] double` difference in means under the null hypothesis.
-   **sigmax** `[in] double` known standard deviation of `x`.
-   **X**: `[in] double*` first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **sigmay** `[in] double` known standard deviation of `y`.
-   **Y**: `[in] double*` second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **results**: `[out] struct stdlib_stats_ztest_two_sample_results_float64*` output [results object][@stdlib/stats/base/ztest/two-sample/results/float64].

```c
void stdlib_strided_dztest2( const CBLAS_INT NX, const CBLAS_INT NY, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const double alpha, const double diff, const double sigmax, const double *X, const CBLAS_INT strideX, const double sigmay, const double *Y, const CBLAS_INT strideY, struct stdlib_stats_ztest_two_sample_float64_results *results );
```

#### stdlib_strided_dztest2_ndarray( NX, NY, alternative, alpha, diff, sigmax, \*X, strideX, offsetX, sigmay, \*Y, strideY, offsetY, \*results )

Computes a two-sample Z-test for two double-precision floating-point strided arrays using alternative indexing semantics.

```c
#include "stdlib/stats/base/ztest/two-sample/results/float64.h"
#include "stdlib/stats/base/ztest/alternatives.h"

struct stdlib_stats_ztest_two_sample_float64_results results = {
    .rejected = false,
    .alpha = 0.0,
    .alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
    .pValue = 0.0,
    .statistic = 0.0,
    .ci = { 0.0, 0.0 },
    .nullValue = 0.0,
    .xmean = 0.0,
    .ymean = 0.0
};

const double x[] = { 4.0, 4.0, 6.0, 6.0, 5.0 };
const double y[] = { 3.0, 3.0, 5.0, 7.0, 7.0 };

stdlib_strided_dztest2_ndarray( 5, 5, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, &results );
```

The function accepts the following arguments:

-   **NX**: `[in] CBLAS_INT` number of indexed elements in `x`.
-   **NY**: `[in] CBLAS_INT` number of indexed elements in `y`.
-   **alternative**: `[in] enum STDLIB_STATS_ZTEST_ALTERNATIVE` [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: `[in] double` significance level.
-   **diff**: `[in] double` difference in means under the null hypothesis.
-   **sigmax** `[in] double` known standard deviation of `x`.
-   **X**: `[in] double*` first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **sigmay** `[in] double` known standard deviation of `y`.
-   **Y**: `[in] double*` second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.
-   **results**: `[out] struct stdlib_stats_ztest_two_sample_results_float64*` output [results object][@stdlib/stats/base/ztest/two-sample/results/float64].

```c
void stdlib_strided_dztest2_ndarray( const CBLAS_INT NX, const CBLAS_INT NY, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const double alpha, const double diff, const double sigmax, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double sigmay, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, struct stdlib_stats_ztest_two_sample_float64_results *results );
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
#include "stdlib/stats/strided/dztest2.h"
#include "stdlib/stats/base/ztest/two-sample/results/float64.h"
#include "stdlib/stats/base/ztest/alternatives.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    // Create a strided arrays:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
    const double y[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Specify the number of elements:
    const int NX = 4;
    const int NY = 4;

    // Specify the stride lengths:
    const int strideX = 2;
    const int strideY = 2;

    // Initialize a results object:
    struct stdlib_stats_ztest_two_sample_float64_results results = {
        .rejected = false,
        .alpha = 0.0,
        .alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
        .pValue = 0.0,
        .statistic = 0.0,
        .ci = { 0.0, 0.0 },
        .nullValue = 0.0,
        .xmean = 0.0,
        .ymean = 0.0
    };

    // Compute a Z-test:
    stdlib_strided_dztest2( NX, NY, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05, 5.0, 3.0, x, strideX, 3.0, y, strideY, &results );

    // Print the result:
    printf( "Statistic: %lf\n", results.statistic );
    printf( "Null hypothesis was %s\n", ( results.rejected ) ? "rejected" : "not rejected" );
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

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/stats/base/ztest/alternatives]: https://github.com/stdlib-js/stats/tree/main/base/ztest/alternatives

[@stdlib/stats/base/ztest/two-sample/results/float64]: https://github.com/stdlib-js/stats/tree/main/base/ztest/two-sample/results/float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
