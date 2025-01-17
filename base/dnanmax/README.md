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

# dnanmax

> Calculate the maximum value of a double-precision floating-point strided array, ignoring `NaN` values.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dnanmax = require( '@stdlib/stats/base/dnanmax' );
```

#### dnanmax( N, x, strideX )

Computes the maximum value of a double-precision floating-point strided array `x`, ignoring `NaN` values.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanmax( x.length, x, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the maximum value of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, NaN, NaN ] );

var v = dnanmax( 4, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dnanmax( 4, x1, 2 );
// returns 4.0
```

#### dnanmax.ndarray( N, x, strideX, offsetX )

Computes the maximum value of a double-precision floating-point strided array, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanmax.ndarray( x.length, x, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the maximum value for every other element in `x` starting from the second element

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, NaN, NaN ] );

var v = dnanmax.ndarray( 4, x, 2, 1 );
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
var uniform = require( '@stdlib/random/base/uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var dnanmax = require( '@stdlib/stats/base/dnanmax' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = dnanmax( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dnanmax.h"
```

#### stdlib_strided_dnanmax( N, \*X, strideX )

Computes the maximum value of a double-precision floating-point strided array, ignoring `NaN` values.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 0.0/0.0, 0.0/0.0 };

double v = stdlib_strided_dnanmax( 5, x, 2 );
// returns 7.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
double stdlib_strided_dnanmax( const CBLAS_INT N, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dnanmax_ndarray( N, \*X, strideX, offsetX )

Computes the maximum value of a double-precision floating-point strided array, ignoring `NaN` values and using alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 0.0/0.0, 0.0/0.0 };

double v = stdlib_strided_dnanmax_ndarray( 5, x, 2, 0 );
// returns 7.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
double stdlib_strided_dnanmax_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/stats/base/dnanmax.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 0.0/0.0, 0.0/0.0 };

    // Specify the number of elements:
    const int N = 5;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the maximum value:
    double v = stdlib_strided_dnanmax( N, x, strideX );

    // Print the result:
    printf( "max: %lf\n", v );
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

-   <span class="package-name">[`@stdlib/stats/base/dmax`][@stdlib/stats/base/dmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/dnanmin`][@stdlib/stats/base/dnanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanmax`][@stdlib/stats/base/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/snanmax`][@stdlib/stats/base/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dmax]: https://github.com/stdlib-js/stats/tree/main/base/dmax

[@stdlib/stats/base/dnanmin]: https://github.com/stdlib-js/stats/tree/main/base/dnanmin

[@stdlib/stats/base/nanmax]: https://github.com/stdlib-js/stats/tree/main/base/nanmax

[@stdlib/stats/base/snanmax]: https://github.com/stdlib-js/stats/tree/main/base/snanmax

<!-- </related-links> -->

</section>

<!-- /.links -->
