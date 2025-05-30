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

# Entropy

> [Laplace][laplace-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [Laplace][laplace-distribution] random variable with location `μ` and scale `b > 0` is

<!-- <equation class="equation" label="eq:laplace_entropy" align="center" raw="h\left( X \right) = \ln(2be)" alt="Differential entropy for a Laplace distribution."> -->

```math
h\left( X \right) = \ln(2be)
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = \ln(2be)" data-equation="eq:laplace_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/laplace/entropy/docs/img/equation_laplace_entropy.svg" alt="Differential entropy for a Laplace distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `e` is [Euler's number][e].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/laplace/entropy' );
```

#### entropy( mu, b )

Returns the [differential entropy][entropy] for a [Laplace][laplace-distribution] distribution with location parameter `mu` and scale parameter `b` (in [nats][nats]).

```javascript
var y = entropy( 2.0, 1.0 );
// returns ~1.693

y = entropy( 0.0, 1.0 );
// returns ~1.693

y = entropy( -1.0, 4.0 );
// returns ~3.079
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = entropy( NaN, 1.0 );
// returns NaN

y = entropy( 0.0, NaN );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = entropy( 0.0, 0.0 );
// returns NaN

y = entropy( 0.0, -1.0 );
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
var entropy = require( '@stdlib/stats/base/dists/laplace/entropy' );

var mu;
var b;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    b = randu() * 20.0;
    y = entropy( mu, b );
    console.log( 'µ: %d, b: %d, h(X;µ,b): %d', mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/laplace/entropy.h"
```

#### stdlib_base_dists_laplace_entropy( mu, b )

Returns the differential entropy for a Laplace distribution with location `mu` and scale `b`.

```c
double out = stdlib_base_dists_laplace_entropy( 0.0, 1.0 );
// returns ~1.693
```

The function accepts the following arguments:

-   **mu**: `[in] double` location parameter.
-   **b**: `[in] double` scale parameter.

```c
double stdlib_base_dists_laplace_entropy( const double mu, const double b );
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
#include "stdlib/stats/base/dists/laplace/entropy.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double b;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        mu = random_uniform( -5.0, 5.0 );
        b = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_laplace_entropy( mu, b );
        printf( "µ: %lf, b: %lf, h(X;µ,b): %lf\n", mu, b, y );
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

[e]: https://en.wikipedia.org/wiki/E_%28mathematical_constant%29

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
