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

> [Bernoulli][bernoulli-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{1}{pq} - 6" alt="Excess kurtosis for a Bernoulli distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = \frac{1}{pq} - 6
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{1}{pq} - 6" data-equation="eq:bernoulli_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/kurtosis/docs/img/equation_bernoulli_kurtosis.svg" alt="Excess kurtosis for a Bernoulli distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `p` is the success probability and `q = 1 - p`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/bernoulli/kurtosis' );
```

#### kurtosis( p )

Returns the [excess kurtosis][kurtosis] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var v = kurtosis( 0.1 );
// returns ~5.111

v = kurtosis( 0.5 );
// returns -2.0
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = kurtosis( NaN );
// returns NaN

v = kurtosis( 1.5 );
// returns NaN

v = kurtosis( -1.0 );
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
var kurtosis = require( '@stdlib/stats/base/dists/bernoulli/kurtosis' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 25, 0.0, 1.0, opts );

logEachMap( 'p: %0.4f, Kurt(X;p): %0.4f', p, kurtosis );
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
#include "stdlib/stats/base/dists/bernoulli/kurtosis.h"
```

#### stdlib_base_dists_bernoulli_kurtosis( p )

Returns the [excess kurtosis][kurtosis] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```c
double out = stdlib_base_dists_bernoulli_kurtosis( 0.1 );
// returns ~5.111
```

The function accepts the following arguments:

-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_bernoulli_kurtosis( const double p );
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
#include "stdlib/stats/base/dists/bernoulli/kurtosis.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double p;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        p = (double)rand() / ( (double)RAND_MAX + 1.0 );
        y = stdlib_base_dists_bernoulli_kurtosis( p );
        printf( "p: %lf, Kurt(X;p): %lf\n", p, y );
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

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
