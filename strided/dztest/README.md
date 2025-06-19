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

# dztest

> Compute a one-sample Z-test for a double-precision floating-point strided array.

<section class="intro">

TODO: add introduction

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dztest = require( '@stdlib/stats/strided/dztest' );
```

#### dztest( N, alternative, alpha, mu, sigma, x, strideX, out )

Computes a one-sample Z-test for a double-precision floating-point strided array.

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );

var results = new Results();
var out = dztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alternative**: [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: significance level.
-   **mu**: mean value under the null hypothesis.
-   **sigma**: known standard deviation.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **out**: output [results object][@stdlib/stats/base/ztest/one-sample/results/float64].

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to perform a one-sample Z-test over every other element in `x`,

<!-- eslint-disable max-len -->

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0, 0.0 ] );

var results = new Results();
var out = dztest( 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, results );
// returns {...}

var bool = ( out === results );
// returns true
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 0.0, 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var results = new Results();
var out = dztest( x1.length, 'two-sided', 0.05, 0.0, 1.0, x1, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

#### dztest.ndarray( N, alternative, alpha, mu, sigma, x, strideX, offsetX, out )

Computes a one-sample Z-test for a double-precision floating-point strided array using alternative indexing semantics.

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );

var results = new Results();
var out = dztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to perform a one-sample Z-test over every other element in `x` starting from the second element

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 0.0, 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0 ] );

var results = new Results();
var out = dztest.ndarray( 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var normal = require( '@stdlib/random/array/normal' );
var dztest = require( '@stdlib/stats/strided/dztest' );

var x = normal( 1000, 0.0, 1.0, {
    'dtype': 'float64'
});

var results = new Results();
var out = dztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
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
#include "stdlib/stats/strided/dztest.h"
```

#### stdlib_strided_dztest( N, alternative, alpha, mu, sigma, \*X, strideX, \*results )

Computes a one-sample Z-test for a double-precision floating-point strided array.

```c
#include "stdlib/stats/base/ztest/one-sample/results/float64.h"
#include "stdlib/stats/base/ztest/alternatives.h"

struct stdlib_stats_ztest_one_sample_float64_results results = {
    .rejected = false,
    .alpha = 0.0,
    .alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
    .pValue = 0.0,
    .statistic = 0.0,
    .ci = { 0.0, 0.0 },
    .nullValue = 0.0,
    .sd = 0.0
};

const double x[] = { 4.0, 4.0, 6.0, 6.0, 5.0 };

stdlib_strided_dztest( 5, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05, 0.0, 1.0, x, 1, &results );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alternative**: `[in] enum STDLIB_STATS_ZTEST_ALTERNATIVE` [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: `[in] double` significance level.
-   **mu**: `[in] double` value of the mean under the null hypothesis.
-   **sigma** `[in] double` known standard deviation.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **results**: `[out] struct stdlib_stats_ztest_one_sample_results_float64*` output [results object][@stdlib/stats/base/ztest/one-sample/results/float64].

```c
void stdlib_strided_dztest( const CBLAS_INT N, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const double alpha, const double mu, const double sigma, const double *X, const CBLAS_INT strideX, struct stdlib_stats_ztest_one_sample_float64_results *results );
```

#### stdlib_strided_dztest_ndarray( N, alternative, alpha, mu, sigma, \*X, strideX, offsetX, \*results )

Computes a one-sample Z-test for a double-precision floating-point strided array using alternative indexing semantics.

```c
#include "stdlib/stats/base/ztest/one-sample/results/float64.h"
#include "stdlib/stats/base/ztest/alternatives.h"

struct stdlib_stats_ztest_one_sample_float64_results results = {
    .rejected = false,
    .alpha = 0.0,
    .alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
    .pValue = 0.0,
    .statistic = 0.0,
    .ci = { 0.0, 0.0 },
    .nullValue = 0.0,
    .sd = 0.0
};

const double x[] = { 4.0, 4.0, 6.0, 6.0, 5.0 };

stdlib_strided_dztest_ndarray( 5, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05, 0.0, 1.0, x, 1, 0, &results );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alternative**: `[in] enum STDLIB_STATS_ZTEST_ALTERNATIVE` [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: `[in] double` significance level.
-   **mu**: `[in] double` value of the mean under the null hypothesis.
-   **sigma** `[in] double` known standard deviation.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **results**: `[out] struct stdlib_stats_ztest_one_sample_results_float64*` output [results object][@stdlib/stats/base/ztest/one-sample/results/float64].

```c
void stdlib_strided_dztest_ndarray( const CBLAS_INT N, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const double alpha, const double mu, const double sigma, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, struct stdlib_stats_ztest_one_sample_float64_results *results );
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
#include "stdlib/stats/strided/dztest.h"
#include "stdlib/stats/base/ztest/one-sample/results/float64.h"
#include "stdlib/stats/base/ztest/alternatives.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Initialize a results object:
    struct stdlib_stats_ztest_one_sample_float64_results results = {
        .rejected = false,
        .alpha = 0.0,
        .alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
        .pValue = 0.0,
        .statistic = 0.0,
        .ci = { 0.0, 0.0 },
        .nullValue = 0.0,
        .sd = 0.0
    };

    // Compute a Z-test:
    stdlib_strided_dztest( N, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05, 5.0, 3.0, x, strideX, &results );

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

[variance]: https://en.wikipedia.org/wiki/Variance

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/stats/base/ztest/alternatives]: https://github.com/stdlib-js/stats/tree/main/base/ztest/alternatives

[@stdlib/stats/base/ztest/one-sample/results/float64]: https://github.com/stdlib-js/stats/tree/main/base/ztest/one-sample/results/float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
