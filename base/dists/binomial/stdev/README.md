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

# Standard Deviation

> [Binomial][binomial-distribution] distribution [standard deviation][stdev].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][stdev] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_stdev" align="center" raw="\sigma = \sqrt{n p (1-p)}" alt="Standard deviation for a binomial distribution."> -->

```math
\sigma = \sqrt{n p (1-p)}
```

<!-- <div class="equation" align="center" data-raw-text="\sigma = \sqrt{n p (1-p)}" data-equation="eq:binomial_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/stdev/docs/img/equation_binomial_stdev.svg" alt="Standard deviation for a binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `n` is the number of trials and `p` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/binomial/stdev' );
```

#### stdev( n, p )

Returns the [standard deviation][stdev] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var v = stdev( 20, 0.1 );
// returns ~1.342

v = stdev( 50, 0.5 );
// returns ~3.536
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = stdev( NaN, 0.5 );
// returns NaN

v = stdev( 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = stdev( 1.5, 0.5 );
// returns NaN

v = stdev( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = stdev( 20, -1.0 );
// returns NaN

v = stdev( 20, 1.5 );
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var stdev = require( '@stdlib/stats/base/dists/binomial/stdev' );

var opts = {
    'dtype': 'float64'
};
var n = discreteUniform( 10, 0, 100, opts );
var p = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'n: %0.4f, p: %0.4f, SD(X;n,p): %0.4f', n, p, stdev );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

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
#include "stdlib/stats/base/dists/binomial/stdev.h"
```

#### stdlib_base_dists_binomial_stdev( n, p )

Returns the [standard deviation][stdev] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```c
double out = stdlib_base_dists_binomial_stdev( 100, 0.1 );
// returns 3.0
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` number of trials.
-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_binomial_stdev( const int32_t n, const double p );
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
#include "stdlib/stats/base/dists/binomial/stdev.h"
#include "stdlib/math/base/special/ceil.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * (max - min) );
}

int main( void ) {
    int32_t n;
    double p;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        n = stdlib_base_ceil( random_uniform( 0.0, 100.0 ) );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_binomial_stdev( n, p );
        printf( "n: %d, p: %lf, SD(X;n,p): %lf\n", n, p, y );
    }

    return 0;
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

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[stdev]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
