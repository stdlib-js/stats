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

# Quantile Function

> [Gumbel][gumbel-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Gumbel][gumbel-distribution] random variable is

<!-- <equation class="equation" label="eq:gumbel_quantile_function" align="center" raw="Q(p)=\mu-\beta\ln(-\ln(p))" alt="Quantile function for a Gumbel distribution."> -->

```math
Q(p)=\mu-\beta\ln(-\ln(p))
```

<!-- <div class="equation" align="center" data-raw-text="Q(p)=\mu-\beta\ln(-\ln(p))" data-equation="eq:gumbel_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gumbel/quantile/docs/img/equation_gumbel_quantile_function.svg" alt="Quantile function for a Gumbel distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p < 1`, where `mu` is the location parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/gumbel/quantile' );
```

#### quantile( p, mu, beta )

Evaluates the [quantile function][quantile-function] for a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta` (scale parameter).

```javascript
var y = quantile( 0.8, 0.0, 1.0 );
// returns ~1.5

y = quantile( 0.5, 4.0, 2.0 );
// returns ~4.733

y = quantile( 0.5, 4.0, 4.0 );
// returns ~5.466
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 0.0 );
// returns NaN
```

#### quantile.factory( mu, beta )

Returns a function for evaluating the [quantile function][quantile-function] of a [Gumbel][gumbel-distribution] distribution with parameters `mu` and `beta`.

```javascript
var myquantile = quantile.factory( 10.0, 2.0 );

var y = myquantile( 0.2 );
// returns ~9.048

y = myquantile( 0.8 );
// returns ~13.00
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var EPS = require( '@stdlib/constants/float64/eps' );
var quantile = require( '@stdlib/stats/base/dists/gumbel/quantile' );

var beta;
var mu;
var p;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    p = uniform( 0.0, 1.0 );
    mu = uniform( -5.0, 5.0 );
    beta = uniform( EPS, 10.0 );
    y = quantile( p, mu, beta );
    console.log( 'p: %d, µ: %d, β: %d, Q(p;µ,β): %d', p.toFixed( 4 ), mu.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/gumbel/quantile.h"
```

#### stdlib_base_dists_gumbel_quantile( p, mu, beta )

Evaluates the [quantile-function][quantile-function] of a [gumbel-distribution][gumbel-distribution] with parameter probability `p`, location parameter `mu` and scale parameter `beta`.

```c
double y = stdlib_base_dists_gumbel_quantile( 0.8, 0.0, 1.0 );
// returns ~1.5
```

The function accepts the following arguments:

-   **p**: `[in] double` probability.
-   **mu**: `[in] double` location parameter.
-   **beta**: `[in] double` scale parameter.

```c
double stdlib_base_dists_gumbel_quantile( const double p, const double mu, const double beta );
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
#include "stdlib/stats/base/dists/gumbel/quantile.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double beta;
    double mu;
    double p;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        mu = random_uniform( -5.0, 5.0 );
        beta = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
        y = stdlib_base_dists_gumbel_quantile( p, mu, beta );
        printf( "p: %lf, µ: %lf, β: %lf, Q(p;µ,β): %lf\n", p, mu, beta, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
