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

# Kurtosis

> [Chi][chi-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [chi][chi-distribution] random variable with degrees of freedom `k` is

<!-- <equation class="equation" label="eq:chi_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = {\frac{2}{\sigma ^{2}}}(1-\mu \sigma \gamma_{1}-\sigma^{2})" alt="Excess kurtosis for a chi distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = {\frac{2}{\sigma ^{2}}}(1-\mu \sigma \gamma_{1}-\sigma^{2})
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = {\frac{2}{\sigma ^{2}}}(1-\mu \sigma \gamma_{1}-\sigma^{2})" data-equation="eq:chi_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chi/kurtosis/docs/img/equation_chi_kurtosis.svg" alt="Excess kurtosis for a chi distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the mean of the distribution, `σ` its standard deviation, and `γ_1` the skewness.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/chi/kurtosis' );
```

#### kurtosis( k )

Returns the [excess kurtosis][kurtosis] of a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var v = kurtosis( 9.0 );
// returns ~0.011

v = kurtosis( 0.5 );
// returns ~2.534
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = kurtosis( -1.0 );
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
var kurtosis = require( '@stdlib/stats/base/dists/chi/kurtosis' );

var opts = {
    'dtype': 'float64'
};
var k = uniform( 10, 0.0, 20.0, opts );

logEachMap( 'k: %0.4f, Kurt(X;k): %0.4f', k, kurtosis );
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
#include "stdlib/stats/base/dists/chi/kurtosis.h"
```

#### stdlib_base_dists_chi_kurtosis( k )

Returns the [excess kurtosis][kurtosis] of a [chi][chi-distribution] distribution with degrees of freedom `k`.

```c
double out = stdlib_base_dists_chi_kurtosis( 9.0 );
// returns ~0.011
```

The function accepts the following arguments:

-   **k**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_chi_kurtosis( const double k );
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
#include "stdlib/stats/base/dists/chi/kurtosis.h"
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
        y = stdlib_base_dists_chi_kurtosis( k );
        printf( "k: %lf, Kurt(X,k): %lf\n", k, y );
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

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
