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

> [Triangular][triangular-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_cdf" align="center" raw="F(x;a,b,c) = \begin{cases} 0 & \text{for } x \leq a \\ \frac{(x-a)^2}{(b-a)(c-a)} & \text{for } a < x \leq c \\ 1-\frac{(b-x)^2}{(b-a)(b-c)} & \text{for } c < x < b \\ 1 & \text{for } b \leq x \end{cases}" alt="Cumulative distribution function for a Triangular distribution."> -->

```math
F(x;a,b,c) = \begin{cases} 0 & \text{for } x \leq a \\ \frac{(x-a)^2}{(b-a)(c-a)} & \text{for } a < x \leq c \\ 1-\frac{(b-x)^2}{(b-a)(b-c)} & \text{for } c < x < b \\ 1 & \text{for } b \leq x \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;a,b,c) = \begin{cases} 0 &amp; \text{for } x \leq a \\ \frac{(x-a)^2}{(b-a)(c-a)} &amp; \text{for } a &lt; x \leq c \\ 1-\frac{(b-x)^2}{(b-a)(b-c)} &amp; \text{for } c &lt; x &lt; b \\ 1 &amp; \text{for } b \leq x \end{cases}" data-equation="eq:triangular_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/cdf/docs/img/equation_triangular_cdf.svg" alt="Cumulative distribution function for a Triangular distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the lower limit, `b` is the upper limit, and `c` is the mode.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/triangular/cdf' );
```

#### cdf( x, a, b, c )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```javascript
var y = cdf( 0.5, -1.0, 1.0, 0.0 );
// returns 0.875

y = cdf( 0.5, -1.0, 1.0, 0.5 );
// returns 0.75

y = cdf( -10.0, -20.0, 0.0, -2.0 );
// returns ~0.278

y = cdf( -2.0, -1.0, 1.0, 0.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0, 1.0, 0.5 );
// returns NaN

y = cdf( 0.0, NaN, 1.0, 0.5 );
// returns NaN

y = cdf( 0.0, 0.0, NaN, 0.5 );
// returns NaN

y = cdf( 2.0, 1.0, 0.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 1.0, 0.0, 1.5 );
// returns NaN

y = cdf( 2.0, 1.0, 0.0, -1.0 );
// returns NaN

y = cdf( 2.0, 0.0, -1.0, 0.5 );
// returns NaN
```

#### cdf.factory( a, b, c )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```javascript
var mycdf = cdf.factory( 0.0, 10.0, 2.0 );
var y = mycdf( 0.5 );
// returns 0.0125

y = mycdf( 8.0 );
// returns 0.95
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/triangular/cdf' );

var a;
var b;
var c;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    x = randu() * 30.0;
    a = randu() * 10.0;
    b = a + (randu() * 40.0);
    c = a + ((b-a) * randu());
    y = cdf( x, a, b, c );
    console.log( 'x: %d, a: %d, b: %d, c: %d, F(x;a,b,c): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/triangular/cdf.h"
```

#### stdlib_base_dists_triangular_cdf( x, a, b, c )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```c
double y = stdlib_base_dists_triangular_cdf( 0.5, -1.0, 1.0, 0.0 );
// returns 0.875
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] double` lower limit.
-   **b**: `[in] double` upper limit.
-   **c**: `[in] double` mode.

```c
double stdlib_base_dists_triangular_cdf( const double x, const double a, const double b, const double c );
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
#include "stdlib/stats/base/dists/triangular/cdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>
#include <math.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double a;
    double b;
    double c;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 30.0 );
        a = random_uniform( 0.0, 10.0 );
        b = random_uniform( a, 40.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
        c = a + random_uniform( 0.0, b - a );
        y = stdlib_base_dists_triangular_cdf( x, a, b, c );
        printf( "x: %lf, a: %lf, b: %lf, c: %lf, F(x;a,b,c): %lf\n", x, a, b, c, y );
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

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

</section>

<!-- /.links -->
