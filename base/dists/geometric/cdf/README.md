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

> [Geometric][geometric-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [geometric][geometric-distribution] random variable is

<!-- <equation class="equation" label="eq:geometric_cdf" align="center" raw="F(x;p)= \begin{cases} 0 & \text{ for } x < 0 \\ 1-(1 - p)^{\left\lfloor x \right\rfloor+1} & \text{ otherwise} \end{cases}" alt="Cumulative distribution function for a geometric distribution."> -->

```math
F(x;p)= \begin{cases} 0 & \text{ for } x < 0 \\ 1-(1 - p)^{\left\lfloor x \right\rfloor+1} & \text{ otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;p)= \begin{cases} 0 &amp; \text{ for } x &lt; 0 \\ 1-(1 - p)^{\left\lfloor x \right\rfloor+1} &amp; \text{ otherwise} \end{cases}" data-equation="eq:geometric_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/cdf/docs/img/equation_geometric_cdf.svg" alt="Cumulative distribution function for a geometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `0 <= p <= 1` is the success probability. `x` denotes the number of _failures_ before the first success.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/geometric/cdf' );
```

#### cdf( x, p )

Evaluates the [cumulative distribution function][cdf] for a [geometric][geometric-distribution] distribution with success probability `p`.

```javascript
var y = cdf( 2.0, 0.5 );
// returns 0.875

y = cdf( 2.0, 0.1 );
// returns ~0.271
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.5 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN

y = cdf( 2.0, 1.5 );
// returns NaN
```

#### cdf.factory( p )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [geometric][geometric-distribution] distribution with success probability `p`

```javascript
var mycdf = cdf.factory( 0.5 );
var y = mycdf( 3.0 );
// returns 0.9375

y = mycdf( 1.0 );
// returns 0.75
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/geometric/cdf' );

var p;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 5.0;
    p = randu();
    y = cdf( x, p );
    console.log( 'x: %d, p: %d, F(x;p): %d', x.toFixed( 4 ), p.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/geometric/cdf.h"
```

#### stdlib_base_dists_geometric_cdf( x, p )

Evaluates the [cumulative distribution function][cdf] of a [geometric][geometric-distribution] distribution with success probability `p`.

```c
double out = stdlib_base_dists_geometric_cdf( 2.0, 0.5 );
// returns 0.875
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **p**: `[in] double` probability of success.

```c
double stdlib_base_dists_geometric_cdf( const double x, const double p );
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
#include "stdlib/stats/base/dists/geometric/cdf.h"
#include <stdlib.h>
#include <stdio.h>
#include <math.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double p;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 40.0 );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_geometric_cdf( x, p );
        printf( "x: %lf, p: %lf, F(x;p): %lf\n", x, p, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- /.references -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

</section>

<!-- /.links -->
