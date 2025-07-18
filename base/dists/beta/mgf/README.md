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

> [Beta][beta-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [beta][beta-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_beta_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1 +\sum_{k=1}^{\infty} \left( \prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r} \right) \frac{t^k}{k!}" alt="Moment-generating function (MGF) for a beta distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1 +\sum_{k=1}^{\infty} \left( \prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r} \right) \frac{t^k}{k!}
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1 +\sum_{k=1}^{\infty} \left( \prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r} \right) \frac{t^k}{k!}" data-equation="eq:beta_beta_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/beta/mgf/docs/img/equation_beta_beta_mgf.svg" alt="Moment-generating function (MGF) for a beta distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha > 0` is the first shape parameter and `beta > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/beta/mgf' );
```

#### mgf( t, alpha, beta )

Evaluates the [moment-generating function][mgf] (MGF) for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = mgf( 0.5, 1.0, 1.0 );
// returns ~1.297

y = mgf( 0.5, 2.0, 4.0 );
// returns ~1.186

y = mgf( 3.0, 2.0, 2.0 );
// returns ~5.575

y = mgf( -0.8, 4.0, 4.0 );
// returns ~0.676
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, -1.0, 0.5 );
// returns NaN

y = mgf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, 0.5, -1.0 );
// returns NaN

y = mgf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### mgf.factory( alpha, beta )

Returns a function for evaluating the [moment-generating function][mgf] for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var mymgf = mgf.factory( 0.5, 0.5 );

var y = mymgf( 0.8 );
// returns ~1.552

y = mymgf( 0.3 );
// returns ~1.168
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
var mgf = require( '@stdlib/stats/base/dists/beta/mgf' );

var opts = {
    'dtype': 'float64'
};
var alpha = uniform( 10, EPS, 5.0, opts );
var beta = uniform( 10, EPS, 5.0, opts );
var t = uniform( 10, 0.0, 20.0, opts );

logEachMap( 't: %0.4f, α: %0.4f, β: %0.4f, M_X(t;α,β): %0.4f', t, alpha, beta, mgf );
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
#include "stdlib/stats/base/dists/beta/mgf.h"
```

#### stdlib_base_dists_beta_mgf( t, alpha, beta )

Evaluates the [moment-generating function][mgf] (MGF) for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```c
double y = stdlib_base_dists_beta_mgf( 0.5, 1.0, 1.0 );
// returns ~1.297
```

The function accepts the following arguments:

-   **t**: `[in] double` input value.
-   **alpha**: `[in] double` first shape parameter.
-   **beta**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_beta_mgf( const double t, const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/beta/mgf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double alpha;
    double beta;
    double t;
    double y;
    int i;
    for ( i = 0; i < 25; i++ ) {
        t = random_uniform( 0.0, 20.0 );
        alpha = random_uniform( 1.0 + STDLIB_CONSTANT_FLOAT64_EPS, 100.0 );
        beta = random_uniform( 1.0 + STDLIB_CONSTANT_FLOAT64_EPS, 100.0 );
        y = stdlib_base_dists_beta_mgf( alpha, beta );
        printf( "t: %lf, α: %lf, β: %lf, M_X(t;α,β): %lf\n", t, alpha, beta, y );
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

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
