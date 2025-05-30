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

# Logarithm of Cumulative Distribution Function

> [Cauchy][cauchy-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Cauchy][cauchy-distribution] random variable is

<!-- <equation class="equation" label="eq:cauchy_cdf" align="center" raw="F(x; x_0,\gamma)=\frac{1}{\pi} \operatorname{arctan} \left(\frac{x-x_0}{\gamma}\right)+\frac{1}{2}" alt="Cumulative distribution function for a Cauchy distribution."> -->

```math
F(x; x_0,\gamma)=\frac{1}{\pi} \mathop{\mathrm{arctan}} \left(\frac{x-x_0}{\gamma}\right)+\frac{1}{2}
```

<!-- <div class="equation" align="center" data-raw-text="F(x; x_0,\gamma)=\frac{1}{\pi} \operatorname{arctan} \left(\frac{x-x_0}{\gamma}\right)+\frac{1}{2}" data-equation="eq:cauchy_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/cauchy/logcdf/docs/img/equation_cauchy_cdf.svg" alt="Cumulative distribution function for a Cauchy distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `x0` is the location parameter and `gamma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/cauchy/logcdf' );
```

#### logcdf( x, x0, gamma )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Cauchy][cauchy-distribution] distribution with parameters `x0` (location parameter) and `gamma > 0` (scale parameter).

```javascript
var y = logcdf( 4.0, 0.0, 2.0 );
// returns ~-0.16

y = logcdf( 1.0, 0.0, 2.0 );
// returns ~-0.435

y = logcdf( 1.0, 3.0, 2.0 );
// returns ~-1.386
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0, 2.0 );
// returns NaN

y = logcdf( 1.0, 2.0, NaN );
// returns NaN

y = logcdf( 1.0, NaN, 3.0 );
// returns NaN
```

If provided `gamma <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### logcdf.factory( x0, gamma )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] of a [Cauchy][cauchy-distribution] distribution with parameters  `x0` (location parameter) and `gamma > 0` (scale parameter).

```javascript
var mylogcdf = logcdf.factory( 10.0, 2.0 );

var y = mylogcdf( 10.0 );
// returns ~-0.693

y = mylogcdf( 12.0 );
// returns ~-0.288
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var EPS = require( '@stdlib/constants/float64/eps' );
var logcdf = require( '@stdlib/stats/base/dists/cauchy/logcdf' );

var opts = {
    'dtype': 'float64'
};
var gamma = uniform( 10, EPS, 10.0, opts );
var x0 = uniform( 10, 0.0, 10.0, opts );
var x = uniform( 10, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, x0: %0.4f, γ: %0.4f, ln(F(x;x0,γ)): %0.4f', x, x0, gamma, logcdf );
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
#include "stdlib/stats/base/dists/cauchy/logcdf.h"
```

#### stdlib_base_dists_cauchy_logcdf( x, x0, gamma )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Cauchy][cauchy-distribution] distribution with parameters `x0` (location parameter) and `gamma > 0` (scale parameter).

```c
double out = stdlib_base_dists_cauchy_logcdf( 4.0, 0.0, 2.0 );
// returns ~-0.16
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **x0**: `[in] double` location parameter.
-   **gamma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_cauchy_logcdf( const double x, const double x0, const double gamma );
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
#include "stdlib/stats/base/dists/cauchy/logcdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double gamma;
    double x0;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        x0 = random_uniform( 0.0, 10.0 );
        gamma = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
        y = stdlib_base_dists_cauchy_logcdf( x, x0, gamma );
        printf( "x: %lf, x0: %lf, γ: %lf, ln(F(x;x0,γ)): %lf\n", x, x0, gamma, y );
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

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

</section>

<!-- /.links -->
