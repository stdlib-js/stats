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

# Standard Deviation

> Planck distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a Planck random variable is

<!-- <equation class="equation" label="eq:planck_stdev" align="center" raw="\sigma = \frac{\sqrt{e^{-\lambda}}}{1 - e^{-\lambda}}" alt="Standard deviation for a Planck distribution."> -->

```math
\sigma = \frac{\sqrt{e^{-\lambda}}}{1 - e^{-\lambda}}
```

<!-- </equation> -->

where `λ` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/planck/stdev' );
```

#### stdev( lambda )

Returns the [standard deviation][standard-deviation] of a Planck distribution with shape parameter `λ`.

```javascript
var v = stdev( 0.1 );
// returns ~9.9958

v = stdev( 1.5 );
// returns ~0.6080
```

If provided a shape parameter `λ` which is nonpositive, the function returns `NaN`.

```javascript
var v = stdev( NaN );
// returns NaN

v = stdev( -1.1 );
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
var stdev = require( '@stdlib/stats/base/dists/planck/stdev' );

var lambda = uniform( 10, 0.1, 10.0 );

var v;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    v = stdev( lambda[ i ] );
    console.log( 'λ: %d, SD(X;λ): %d', lambda[ i ].toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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
#include "stdlib/stats/base/dists/planck/stdev.h"
```

#### stdlib_base_dists_planck_stdev( lambda )

Returns the standard deviation of a Planck distribution with shape parameter `λ`.

```c
double out = stdlib_base_dists_planck_stdev( 0.1 );
// returns ~9.9958
```

The function accepts the following arguments:

-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_planck_stdev( const double lambda );
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
#include "stdlib/stats/base/dists/planck/stdev.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        lambda = random_uniform( 0.1, 10.0 );
        y = stdlib_base_dists_planck_stdev( lambda );
        printf( "λ: %lf, SD(X;λ): %lf\n", lambda, y );
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

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
