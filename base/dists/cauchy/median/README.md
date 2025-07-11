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

# Median

> [Cauchy][cauchy-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [Cauchy][cauchy-distribution] random variable with location parameter `x0` and scale parameter `Ɣ > 0` is

<!-- <equation class="equation" label="eq:cauchy_median" align="center" raw="\operatorname{Median}\left( X \right) = x_0" alt="Median for a Cauchy distribution."> -->

```math
\mathop{\mathrm{Median}}\left( X \right) = x_0
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Median}\left( X \right) = x_0" data-equation="eq:cauchy_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/cauchy/median/docs/img/equation_cauchy_median.svg" alt="Median for a Cauchy distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var median = require( '@stdlib/stats/base/dists/cauchy/median' );
```

#### median( x0, gamma )

Returns the [median][median] of a [Cauchy][cauchy-distribution] distribution with location parameter `x0` and scale parameter `gamma`.

```javascript
var v = median( 10.0, 5.0 );
// returns 10.0

v = median( 7.0, 2.0 );
// returns 7.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = median( NaN, 5.0 );
// returns NaN

v = median( 20.0, NaN );
// returns NaN
```

If provided `gamma <= 0`, the function returns `NaN`.

```javascript
var v = median( 1.0, -1.0 );
// returns NaN

v = median( 1.0, 0.0 );
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
var logEachMap = require( '@stdlib/console/log-each-map' );
var EPS = require( '@stdlib/constants/float64/eps' );
var median = require( '@stdlib/stats/base/dists/cauchy/median' );

var opts = {
    'dtype': 'float64'
};
var gamma = uniform( 10, EPS, 10.0, opts );
var x0 = uniform( 10, 0.0, 100.0, opts );

logEachMap( 'x0: %0.4f, γ: %0.4f, Median(X;x0,γ): %0.4f', x0, gamma, median );
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
#include "stdlib/stats/base/dists/cauchy/median.h"
```

#### stdlib_base_dists_cauchy_median( x0, gamma )

Evaluates the [median][median] of a [Cauchy][cauchy-distribution] distribution with location parameter `x0` and scale parameter `gamma`.

```c
double out = stdlib_base_dists_cauchy_median( 10.0, 5.0 );
// returns 10.0
```

The function accepts the following arguments:

-   **x0**: `[in] double` location parameter.
-   **gamma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_cauchy_median( const double x0, const double gamma );
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
#include "stdlib/stats/base/dists/cauchy/median.h"
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
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x0 = random_uniform( 0.0, 100.0 );
        gamma = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
        y = stdlib_base_dists_cauchy_median( x0, gamma );
        printf( "x0: %lf, γ: %lf, Median(x0;γ): %lf\n", x0, gamma, y );
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

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

[median]: https://en.wikipedia.org/wiki/Median

</section>

<!-- /.links -->
