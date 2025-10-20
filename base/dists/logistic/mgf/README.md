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

# Moment-Generating Function

> [Logistic][logistic-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [logistic][logistic-distribution] random variable is

<!-- <equation class="equation" label="eq:logistic_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = e^{\mu t}\operatorname{B}(1-st, 1+st)" alt="Moment-generating function (MGF) for a logistic distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = e^{\mu t}\mathop{\mathrm{B}}(1-st, 1+st)
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = e^{\mu t}\operatorname{B}(1-st, 1+st)" data-equation="eq:logistic_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/logistic/mgf/docs/img/equation_logistic_mgf_function.svg" alt="Moment-generating function (MGF) for a logistic distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `st ∈ (-1,1)`, where `mu` is the location parameter and `s` is the scale parameter. In above equation, `B` denotes the [Beta function][@stdlib/math/base/special/beta]. For `st` outside the interval `(-1,1)`, the function is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/logistic/mgf' );
```

#### mgf( t, mu, s )

Evaluates the logarithm of the [moment-generating function][mgf] (MGF) for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = mgf( 0.9, 0.0, 1.0 );
// returns ~9.15

y = mgf( 0.1, 4.0, 4.0 );
// returns ~1.971

y = mgf( -0.2, 4.0, 4.0 );
// returns ~1.921
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s < 0` or `abs( s * t ) > 1`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, 0.0, -1.0 );
// returns NaN

y = mgf( 0.5, 0.0, 4.0 );
// returns NaN
```

#### mgf.factory( mu, s )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) of a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mymgf = mgf.factory( 10.0, 0.5 );

var y = mymgf( 0.5 );
// returns ~164.846

y = mymgf( 2.0 );
// returns Infinity
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
var mgf = require( '@stdlib/stats/base/dists/logistic/mgf' );

var opts = {
    'dtype': 'float64'
};
var t = uniform( 10, 0.0, 1.0, opts );
var mu = uniform( 10, -5.0, 5.0, opts );
var s = uniform( 10, 0.0, 2.0, opts );

logEachMap( 't: %0.4f, µ: %0.4f, s: %0.4f, M_X(t;µ,s): %0.4f', t, mu, s, mgf );
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
#include "stdlib/stats/base/dists/logistic/mgf.h"
```

#### stdlib_base_dists_logistic_mgf( t, mu, s )

Evaluates the logarithm of the [moment-generating function][mgf] (MGF) for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```c
double out = stdlib_base_dists_logistic_mgf( 0.9, 0.0, 1.0 );
// returns ~9.15
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **s**: `[in] double` scale parameter.

```c
double stdlib_base_dists_logistic_mgf( const double t, const double mu, const double s );
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
#include "stdlib/stats/base/dists/logistic/mgf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max-min ) );
}

int main( void ) {
    double mu;
    double s;
    double t;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        mu = random_uniform( -5.0, 5.0 );
        s = random_uniform( 0.0, 20.0 );
        t = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_logistic_mgf( t, mu, s );
        printf( "t: %lf, µ: %lf, s: %lf, M_X(t;µ,s): %lf\n", t, mu, s, y );
    }
}
```

</section>

<!-- /.examples -->

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

[@stdlib/math/base/special/beta]: https://github.com/stdlib-js/math-base-special-beta

[logistic-distribution]: https://en.wikipedia.org/wiki/Logistic_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
