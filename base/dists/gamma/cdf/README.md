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

> [Gamma][gamma-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [gamma][gamma-distribution] random variable is

<!-- <equation class="equation" label="eq:gamma_cdf" align="center" raw="F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}" alt="Cumulative distribution function for a Gamma distribution."> -->

```math
F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}" data-equation="eq:gamma_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gamma/cdf/docs/img/equation_gamma_cdf.svg" alt="Cumulative distribution function for a Gamma distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha` is the shape parameter and `beta` is the rate parameter of the distribution. `gamma` is the lower [incomplete gamma function][@stdlib/math/base/special/gammainc].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/gamma/cdf' );
```

#### cdf( x, alpha, beta )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = cdf( 2.0, 1.0, 1.0 );
// returns ~0.865

y = cdf( 2.0, 3.0, 1.0 );
// returns ~0.323

y = cdf( -1.0, 2.0, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = cdf( +Infinity, 4.0, 2.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 0.5 );
// returns NaN
```

If provided `alpha = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( 2.0, 0.0, 2.0 );
// returns 1.0

y = cdf( -2.0, 0.0, 2.0 );
// returns 0.0

y = cdf( 0.0, 0.0, 2.0 );
// returns 1.0
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.5, -1.0 );
// returns NaN
```

#### cdf.factory( alpha, beta )

Returns a function for evaluating the [cumulative distribution function][cdf] for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mycdf = cdf.factory( 0.5, 0.1 );

var y = mycdf( 12.0 );
// returns ~0.879

y = mycdf( 8.0 );
// returns ~0.794
```

</section>

<!-- /.usage -->

* * *

<section class="c">

## C APIs

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/gamma/cdf.h"
```

#### stdlib_base_dists_gamma_cdf( x, alpha, beta )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```c
double out = stdlib_base_dists_gamma_cdf( 2.0, 1.0, 1.0 );
// returns ~0.865

out = stdlib_base_dists_gamma_cdf( 2.0, 3.0, 1.0 );
// returns ~0.323
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **alpha**: `[in] double` shape parameter.
-   **beta**: `[in] double` rate parameter.

```c
double stdlib_base_dists_gamma_cdf( const double x, const double alpha, const double beta );
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/gamma/cdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( double min, double max ) {
    double scale = rand() / (double) RAND_MAX;
    return min + ( scale * ( max - min ) );
}

int main( void ) {
    double x;
    double alpha;
    double beta;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 3.0 );
        alpha = random_uniform( 0.1, 5.0 );
        beta = random_uniform( 0.1, 5.0 );
        y = stdlib_base_dists_gamma_cdf( x, alpha, beta );
        printf( "x: %lf, α: %lf, β: %lf, F(x;α,β): %lf\n", x, alpha, beta, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/gamma/cdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 3.0;
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = cdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, F(x;α,β): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

[@stdlib/math/base/special/gammainc]: https://github.com/stdlib-js/math-base-special-gammainc

</section>

<!-- /.links -->
