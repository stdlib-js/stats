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

# Cumulative Distribution Function

> [Fréchet][frechet-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Fréchet][frechet-distribution] random variable is

<!-- <equation class="equation" label="eq:frechet_cdf" align="center" raw="F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}" alt="Cumulative distribution function for a Fréchet distribution."> -->

```math
F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}
```

<!-- <div class="equation" align="center" data-raw-text="F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}" data-equation="eq:frechet_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/cdf/docs/img/equation_frechet_cdf.svg" alt="Cumulative distribution function for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha > 0` is the shape, `s > 0` the scale, and `m` the location parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/frechet/cdf' );
```

#### cdf( x, alpha, s, m )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.

```javascript
var y = cdf( 10.0, 2.0, 3.0, 5.0 );
// returns ~0.698

y = cdf( -3.0, 1.0, 2.0, -4.0 );
// returns ~0.135

y = cdf( 0.0, 2.0, 1.0, -1.0 );
// returns ~0.368
```

If provided `x <= m`, the function returns `0`.

```javascript
var y = cdf( -2.0, 2.0, 1.0, -1.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0, 1.0, 0.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0, 0.0 );
// returns NaN

y = cdf( 0.0, 1.0, NaN, 0.0);
// returns NaN

y = cdf( 0.0, 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -0.1, 1.0, 1.0 );
// returns NaN

y = cdf( 2.0, 0.0, 1.0, 1.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 1.0, -1.0, 1.0 );
// returns NaN

y = cdf( 2.0, 1.0, 0.0, 1.0 );
// returns NaN
```

#### cdf.factory( alpha, s, m )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m`.

```javascript
var mycdf = cdf.factory( 3.0, 3.0, 5.0 );

var y = mycdf( 10.0 );
// returns ~0.806

y = mycdf( 7.0 );
// returns ~0.034
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var EPS = require( '@stdlib/constants/float64/eps' );
var cdf = require( '@stdlib/stats/base/dists/frechet/cdf' );

var alpha;
var m;
var s;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    alpha = uniform( EPS, 5.0 );
    s = uniform( EPS, 5.0 );
    m = uniform( -2.0, 2.0 );
    x = uniform( m + 0.1, m + 10.0 );
    y = cdf( x, alpha, s, m );
    console.log( 'x: %d, α: %d, s: %d, m: %d, F(x;α,s,m): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

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
#include "stdlib/stats/base/dists/frechet/cdf.h"
```

#### stdlib_base_dists_frechet_cdf( x, alpha, s, m )

Evaluates the cumulative distribution function (CDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.

```c
double y = stdlib_base_frechet_cdf( 10.0, 2.0, 3.0, 2.0 );
// returns ~0.869
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **alpha**: `[in] double` shape parameter.
-   **s**: `[in] double` scale parameter.
-   **m**: `[in] double` location parameter.

```c
double stdlib_base_dists_frechet_cdf( const double x, const double alpha, const double s, const double m );
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
#include "stdlib/stats/base/dists/frechet/cdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double alpha;
    double x;
    double s;
    double m;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        alpha = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        s = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        m = random_uniform( -2.0, 2.0 );
        x = random_uniform( m + 0.1, m + 10.0 );
        y = stdlib_base_dists_frechet_cdf( x, alpha, s, m );
        printf( "x: %lf, α: %lf, s: %lf, m: %lf, F(x;α,s,m): %lf\n", x, alpha, s, m, y );
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

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
