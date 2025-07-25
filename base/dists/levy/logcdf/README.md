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

> [Lévy][levy-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Lévy][levy-distribution] random variable is

<!-- <equation class="equation" label="eq:levy_cdf" align="center" raw="F(x;\mu,b) = \begin{cases} \operatorname{erfc}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) & \text{ for } x > \mu \\ 0 & \text{ otherwise } \end{cases}" alt="Cumulative distribution function for a Lévy distribution."> -->

```math
F(x;\mu,b) = \begin{cases} \mathop{\mathrm{erfc}}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) & \text{ for } x > \mu \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\mu,b) = \begin{cases} \operatorname{erfc}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) &amp; \text{ for } x &gt; \mu \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:levy_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/levy/logcdf/docs/img/equation_levy_cdf.svg" alt="Cumulative distribution function for a Lévy distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/levy/logcdf' );
```

#### logcdf( x, mu, c )

Evaluates the logarithm of the [cumulative distribution function][cdf] (CDF) for a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c > 0` (scale parameter).

```javascript
var y = logcdf( 2.0, 0.0, 1.0 );
// returns ~-0.735

y = logcdf( 12.0, 10.0, 3.0 );
// returns ~-1.51

y = logcdf( 9.0, 10.0, 3.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `c <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### logcdf.factory( mu, c )

Returns a function for evaluating the logarithm of the [cumulative distribution function][cdf] of a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c > 0` (scale parameter).

```javascript
var mylogcdf = logcdf.factory( 3.0, 1.5 );

var y = mylogcdf( 4.0 );
// returns ~-1.511

y = mylogcdf( 2.0 );
// returns -Infinity
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
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var logcdf = require( '@stdlib/stats/base/dists/levy/logcdf' );

var mu;
var c;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    mu = randu() * 10.0;
    x = ( randu()*10.0 ) + mu;
    c = ( randu()*10.0 ) + EPS;
    y = logcdf( x, mu, c );
    console.log( 'x: %d, µ: %d, c: %d, ln(F(x;µ,c)): %d', x.toFixed( 4 ), mu.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/levy/logcdf.h"
```

#### stdlib_base_dists_levy_logcdf( x, mu, c )

Evaluates the logarithm of the [cumulative distribution function][cdf] (CDF) for a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c > 0` (scale parameter).

```c
double out = stdlib_base_dists_levy_logcdf( 2.0, 0.0, 1.0 );
// returns ~-0.735
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **c**: `[in] double` scale parameter.

```c
double stdlib_base_dists_levy_logcdf( const double x, const double mu, const double c );
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
#include "stdlib/stats/base/dists/levy/logcdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double c;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        mu = random_uniform( 0.0, 10.0 );
        x = random_uniform( mu, mu + 10.0 );
        c = random_uniform(STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
        y = stdlib_base_dists_levy_logcdf( x, mu, c );
        printf( "x: %lf, µ: %lf, c: %lf, ln(F(x;µ,c)): %lf\n", x, mu, c, y );
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

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

</section>

<!-- /.links -->
