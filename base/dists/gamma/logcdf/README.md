<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Logarithm of Cumulative Distribution Function

> [Gamma][gamma-distribution] distribution logarithm of cumulative distribution function (CDF).

<section class="intro">

The [cumulative distribution function][cdf] for a [gamma][gamma-distribution] random variable is

<!-- <equation class="equation" label="eq:gamma_cdf" align="center" raw="F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}" alt="Cumulative distribution function for a Gamma distribution."> -->

```math
F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}" data-equation="eq:gamma_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@9dcb6eb6ab19f2ea81f3bcab5344b29961028a0c/lib/node_modules/@stdlib/stats/base/dists/gamma/logcdf/docs/img/equation_gamma_cdf.svg" alt="Cumulative distribution function for a Gamma distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha` is the shape parameter and `beta` is the rate parameter of the distribution. `gamma` is the lower [incomplete gamma function][@stdlib/math/base/special/gammainc].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/gamma/logcdf' );
```

#### logcdf( x, alpha, beta )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = logcdf( 2.0, 0.5, 1.0 );
// returns ~-0.047

y = logcdf( 0.1, 1.0, 1.0 );
// returns ~-2.352

y = logcdf( -1.0, 4.0, 2.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 1.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha < 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -0.5, 1.0 );
// returns NaN
```

If provided `alpha = 0`, the function evaluates the logarithm of the [CDF][cdf] for a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logcdf( 2.0, 0.0, 2.0 );
// returns 0.0

y = logcdf( -2.0, 0.0, 2.0 );
// returns -Infinity

y = logcdf( 0.0, 0.0, 2.0 );
// returns 0.0
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 1.0, 0.0 );
// returns NaN

y = logcdf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### logcdf.factory( alpha, beta )

Returns a `function` for evaluating the natural logarithm of the [CDF][cdf] for a [gamma][gamma-distribution]  distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mylogcdf = logcdf.factory( 3.0, 1.5 );

var y = mylogcdf( 1.0 );
// returns ~-1.655

y = mylogcdf( 4.0 );
// returns ~-0.064
```

* * *

### C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

#### Usage

```c
#include "stdlib/stats/base/dists/gamma/logcdf.h"
```

#### stdlib_base_dists_gamma_logcdf( x, alpha, beta )

Evaluates the natural logarithm of the cumulative distribution function (CDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta`.

```c
double out = stdlib_base_dists_gamma_logcdf( 2.0, 0.5, 1.0 );
// returns ~-0.047

out = stdlib_base_dists_gamma_logcdf( 0.1, 1.0, 1.0 );
// returns ~-2.352
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **alpha**: `[in] double` shape parameter.
-   **beta**: `[in] double` rate parameter.

```c
double stdlib_base_dists_gamma_logcdf( const double x, const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/gamma/logcdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( double a, double b ) {
    double r = ( (double)rand() / ( (double)RAND_MAX + 1.0 ) );
    return a + ( r * ( b - a ) );
}

int main( void ) {
    double alpha;
    double beta;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 2.0 );
        alpha = random_uniform( 1.0, 10.0 );
        beta = random_uniform( 1.0, 10.0 );
        y = stdlib_base_dists_gamma_logcdf( x, alpha, beta );
        printf( "x: %lf, α: %lf, β: %lf, ln(F(x;α,β)): %lf\n", x, alpha, beta, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var logcdf = require( '@stdlib/stats/base/dists/gamma/logcdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.0, 3.0, opts );
var alpha = uniform( 10, 0.0, 5.0, opts );
var beta = uniform( 10, 0.0, 5.0, opts );

logEachMap( 'x: %0.4f, α: %0.4f, β: %0.4f, ln(f(x;α,β)): %0.4f', x, alpha, beta, logcdf );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_Distribution_Function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[@stdlib/math/base/special/gammainc]: https://github.com/stdlib-js/math-base-special-gammainc

</section>

<!-- /.links -->
