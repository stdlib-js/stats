<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Mean

> [Hypergeometric][hypergeometric-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [mean][expected-value] for a [hypergeometric][hypergeometric-distribution] random variable is

<!-- <equation class="equation" label="eq:hypergeometric_mean" align="center" raw="\mathbb{E} \left[ X \right] = n{K \over N}" alt="Mean for a hypergeometric distribution."> -->

```math
\mathbb{E} \left[ X \right] = n{K \over N}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E} \left[ X \right] = n{K \over N}" data-equation="eq:hypergeometric_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/mean/docs/img/equation_hypergeometric_mean.svg" alt="Mean for a hypergeometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/hypergeometric/mean' );
```

#### mean( N, K, n )

Returns the [expected value][expected-value] of a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var v = mean( 16, 11, 4 );
// returns 2.75

v = mean( 2, 1, 1 );
// returns 0.5
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mean( NaN, 10, 4 );
// returns NaN

v = mean( 20, NaN, 4 );
// returns NaN

v = mean( 20, 10, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K`, or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = mean( 10.5, 5, 2 );
// returns NaN

v = mean( 10, 1.5, 2 );
// returns NaN

v = mean( 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.

```javascript
var v = mean( 10, 5, 12 );
// returns NaN

v = mean( 10, 12, 5 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var mean = require( '@stdlib/stats/base/dists/hypergeometric/mean' );

var v;
var i;
var N;
var K;
var n;

for ( i = 0; i < 10; i++ ) {
    N = round( randu() * 20 );
    K = round( randu() * N );
    n = round( randu() * K );
    v = mean( N, K, n );
    console.log( 'N: %d, K: %d, n: %d, E(X;N,K,n): %d', N, K, n, v.toFixed( 4 ) );
}
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
#include "stdlib/stats/base/dists/hypergeometric/mean.h"
```

#### stdlib_base_dists_hypergeometric_mean( N, K, n )

Returns the expected value of a hypergeometric distribution.

```c
double out = stdlib_base_dists_hypergeometric_mean( 16, 11, 4 );
// returns 2.75
```

The function accepts the following arguments:

-   **N**: `[in] int32_t` population size.
-   **K**: `[in] int32_t` subpopulation size.
-   **n**: `[in] int32_t` number of draws.

```c
double stdlib_base_dists_hypergeometric_mean( const int32_t N, const int32_t K, const int32_t n );
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
#include "stdlib/stats/base/dists/hypergeometric/mean.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>

static int32_t random_int( const int32_t min, const int32_t max ) {
    int32_t v = rand() % ( max - min + 1 );
    return min + v;
}

int main( void ) {
    int32_t N;
    int32_t K;
    int32_t n;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        N = random_int( 1, 20 );
        K = random_int( 0, N );
        n = random_int( 0, K );
        y = stdlib_base_dists_hypergeometric_mean( N, K, n );
        printf( "N: %d, K: %d, n: %d, E(X;N,K,n): %.4f\n", N, K, n, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
