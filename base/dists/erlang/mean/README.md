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

> [Erlang][erlang-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mean][expected-value] for an [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_mean" align="center" raw="\mathbb{E} \left[ X \right] = \frac{k}{\lambda}" alt="Mean for an Erlang distribution."> -->

```math
\mathbb{E} \left[ X \right] = \frac{k}{\lambda}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E} \left[ X \right] = \frac{k}{\lambda}" data-equation="eq:erlang_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/erlang/mean/docs/img/equation_erlang_mean.svg" alt="Mean for an Erlang distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the shape parameter and `λ` is the rate parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/erlang/mean' );
```

#### mean( k, lambda )

Returns the [expected value][expected-value] of an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var v = mean( 1, 1.0 );
// returns 1.0

v = mean( 4, 12.0 );
// returns ~0.333

v = mean( 8, 2.0 );
// returns 4.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mean( NaN, 2.0 );
// returns NaN

v = mean( 2.0, NaN );
// returns NaN
```

If not provided a positive integer for `k`, the function returns `NaN`.

```javascript
var v = mean( 1.8, 1.0 );
// returns NaN

v = mean( -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var v = mean( 2, 0.0 );
// returns NaN

v = mean( 2, -1.0 );
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
var uniform = require( '@stdlib/random/array/uniform' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var EPS = require( '@stdlib/constants/float64/eps' );
var mean = require( '@stdlib/stats/base/dists/erlang/mean' );

var opts = {
    'dtype': 'float64'
};
var k = discreteUniform( 10, 0, 10, opts );
var lambda = uniform( 10, EPS, 10.0, opts );

logEachMap( 'k: %d, λ: %0.4f, E(X;k,λ): %0.4f', k, lambda, mean );
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
#include "stdlib/stats/base/dists/erlang/mean.h"
```

#### stdlib_base_dists_erlang_mean( k, lambda )

Evaluates the [expected value][expected-value] of an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```c
double out = stdlib_base_dists_erlang_mean( 1, 1.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **k**: `[in] int32_t` shape parameter.
-   **lambda**: `[in] double` rate parameter.

```c
double stdlib_base_dists_erlang_mean( const int32_t k, const double lambda );
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
#include "stdlib/stats/base/dists/erlang/mean.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/math/base/special/round.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    int32_t k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        k = stdlib_base_round( random_uniform( 0.0, 10.0 ) );
        lambda = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
        y = stdlib_base_dists_erlang_mean( k, lambda );
        printf( "k: %d, λ: %lf, E(X;k,λ): %lf\n", k, lambda, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
