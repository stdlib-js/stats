<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Probability Mass Function

> Planck (discrete exponential) distribution [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a Planck random variable is defined as

<!-- <equation class="equation" label="eq:planck_pmf" align="center" raw="\Pr(X = x, \lambda) = \begin{cases}(1 - e^{-\lambda})e^{-\lambda x} & \text{for } x = 0, 1, 2, \ldots \\ 0 & \text{otherwise} \end{cases}" alt="Probability mass function (PMF) for a Planck (discrete exponential) distribution."> -->

```math
\Pr(X = x, \lambda) = \begin{cases}(1 - e^{-\lambda})e^{-\lambda x} & \text{for } x = 0, 1, 2, \ldots \\ 0 & \text{otherwise} \end{cases}
```

<!-- </equation> -->

where `λ` is the shape parameter. The random variable `X` denotes the count of events in a quantized system.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats/base/dists/planck/pmf' );
```

#### pmf( x, lambda )

Evaluates the [probability mass function][pmf] (PMF) of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var y = pmf( 4, 0.3 );
// returns ~0.0781

y = pmf( 2, 1.7 );
// returns ~0.0273

y = pmf( -1, 2.5 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, 0.0 );
// returns NaN

y = pmf( 0, NaN );
// returns NaN
```

If provided a shape parameter `lambda` which is a nonpositive number, the function returns `NaN`.

```javascript
var y = pmf( 2, -1.0 );
// returns NaN
```

#### pmf.factory( lambda )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var mypmf = pmf.factory( 0.5 );
var y = mypmf( 3 );
// returns ~0.0878

y = mypmf( 1 );
// returns ~0.2387
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var pmf = require( '@stdlib/stats/base/dists/planck/pmf' );

var lambda = uniform( 10, 0.1, 5.0 );
var x = discreteUniform( 10, 0, 5 );

var y;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    y = pmf( x[ i ], lambda[ i ] );
    console.log( 'x: %d, λ: %d, P(X = x; λ): %d', x[ i ], lambda[ i ].toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/planck/pmf.h"
```

#### stdlib_base_dists_planck_pmf( x, lambda )

Evaluates the [probability mass function][pmf] for a Planck (discrete exponential) distribution with input value `x` and shape parameter `lambda`.

```c
double out = stdlib_base_dists_planck_pmf( 4.0, 0.3 );
// returns ~0.0781
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_planck_pmf( const double x, const double lambda );
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
#include "stdlib/stats/base/dists/planck/pmf.h"
#include "stdlib/math/base/special/round.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double lambda;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = stdlib_base_round( random_uniform( 0.0, 11.0 ) );
        lambda = random_uniform( 0.1, 5.0 );
        y = stdlib_base_dists_planck_pmf( x, lambda );
        printf( "x: %.0f, lambda: %lf, P(X = x; lambda): %lf\n", x, lambda, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
