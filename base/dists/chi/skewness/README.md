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

# Skewness

> [Chi][chi-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [chi][chi-distribution] random variable with degrees of freedom.`k` is

<!-- <equation class="equation" label="eq:chi_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{\mu}{\sigma^{3}}\,(1 - 2 \sigma^{2})" alt="Skewness for a chi distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = \frac{\mu}{\sigma^{3}}\,(1 - 2 \sigma^{2})
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{\mu}{\sigma^{3}}\,(1 - 2 \sigma^{2})" data-equation="eq:chi_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chi/skewness/docs/img/equation_chi_skewness.svg" alt="Skewness for a chi distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the mean of the distribution and `σ` its standard deviation.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/chi/skewness' );
```

#### skewness( k )

Returns the [skewness][skewness] of a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var v = skewness( 9.0 );
// returns ~0.252

v = skewness( 0.5 );
// returns ~1.544
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = skewness( -1.0 );
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
var skewness = require( '@stdlib/stats/base/dists/chi/skewness' );

var opts = {
    'dtype': 'float64'
};
var k = uniform( 10, 0.0, 20.0, opts );

logEachMap( 'k: %0.4f, skew(X;k): %0.4f', k, skewness );
```

</section>

<!-- /.examples -->

* * *

<section class="c">

## C APIs

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/chi/skewness.h"
```

#### stdlib_base_dists_chi_skewness( k )

Returns the [skewness][skewness] of a [chi][chi-distribution] distribution with degrees of freedom `k`.

```c
double out = stdlib_base_dists_chi_skewness( 9.0 );
// returns ~0.252
```

The function accepts the following arguments:

-   **k**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_chi_skewness( const double k );
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
#include "stdlib/stats/base/dists/chi/skewness.h"
#include <stdio.h>
#include <stdlib.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        k = random_uniform( 1.0, 10.0 );
        y = stdlib_base_dists_chi_skewness( k );
        printf( "k: %lf, skew(X,k): %lf\n", k, y );
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

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
