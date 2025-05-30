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

# Variance

> [Chi][chi-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [chi][chi-distribution] random variable is

<!-- <equation class="equation" label="eq:chi_variance" align="center" raw="\operatorname{Var}\left( X \right) = k - \mathbb{E}\left[ X \right]^2" alt="Variance for a chi distribution."> -->

```math
\mathop{\mathrm{Var}}\left( X \right) = k - \mathbb{E}\left[ X \right]^2
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = k - \mathbb{E}\left[ X \right]^2" data-equation="eq:chi_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chi/variance/docs/img/equation_chi_variance.svg" alt="Variance for a chi distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k >= 0` is the degrees of freedom.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/chi/variance' );
```

#### variance( k )

Returns the [variance][variance] of a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var v = variance( 9.0 );
// returns ~0.485

v = variance( 0.5 );
// returns ~0.272
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var v = variance( -1.0 );
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
var variance = require( '@stdlib/stats/base/dists/chi/variance' );

var opts = {
    'dtype': 'float64'
};
var k = uniform( 10, 0.0, 20.0, opts );

logEachMap( 'k: %0.4f, Var(X;k): %0.4f', k, variance );
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
#include "stdlib/stats/base/dists/chi/variance.h"
```

#### stdlib_base_dists_chi_variance( k )

Returns the [variance][variance] of a [chi][chi-distribution] distribution with degrees of freedom `k`.

```c
double out = stdlib_base_dists_chi_variance( 9.0 );
// returns ~0.485
```

The function accepts the following arguments:

-   **k**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_chi_variance( const double k );
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
#include "stdlib/stats/base/dists/chi/variance.h"
#include <stdio.h>
#include <stdlib.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max-min ) );
}

int main( void ) {
    double k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        k = random_uniform( 1.0, 10.0 );
        y = stdlib_base_dists_chi_variance( k );
        printf( "k: %lf, Var(X;k): %lf\n", k, y );
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

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
