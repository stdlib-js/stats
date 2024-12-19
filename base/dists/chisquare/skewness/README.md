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

> [Chi-squared][chisquare-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:skewness" align="center" raw="\operatorname{skew}\left( X \right) = \sqrt{8/k}" alt="Skewness for a chi-squared distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = \sqrt{8/k}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \sqrt{8/k}" data-equation="eq:skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chisquare/skewness/docs/img/equation_skewness.svg" alt="Skewness for a chi-squared distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k > 0` is the degrees of freedom.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/chisquare/skewness' );
```

#### skewness( k )

Returns the [skewness][skewness] of a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var v = skewness( 9.0 );
// returns ~0.943

v = skewness( 0.5 );
// returns 4.0
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
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var skewness = require( '@stdlib/stats/base/dists/chisquare/skewness' );

var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = randu() * 20.0;
    v = skewness( k );
    console.log( 'k: %d, skew(X,k): %d', k.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/chisquare/skewness.h"
```

#### stdlib_base_dists_chisquare_skewness( k )

Evaluates the [skewness][skewness] of a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```c
double out = stdlib_base_dists_chisquare_skewness( 9.0 );
// returns ~0.943
```

The function accepts the following arguments:

-   **k**: `[in] double` degrees of freedom.

```c
double stdlib_base_dists_chisquare_skewness( const double k );
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
#include "stdlib/stats/base/dists/chisquare/skewness.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        k = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_chisquare_skewness( k );
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

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
