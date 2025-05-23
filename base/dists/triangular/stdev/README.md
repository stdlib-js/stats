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

# Standard Deviation

> [Triangular][triangular-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_stdev" align="center" raw="\sigma = \sqrt{ \frac{a^{2}+b^{2}+c^{2}-ab-ac-bc}{18} }" alt="Standard deviation for a triangular distribution."> -->

```math
\sigma = \sqrt{ \frac{a^{2}+b^{2}+c^{2}-ab-ac-bc}{18} }
```

<!-- <div class="equation" align="center" data-raw-text="\sigma = \sqrt{ \frac{a^{2}+b^{2}+c^{2}-ab-ac-bc}{18} }" data-equation="eq:triangular_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/stdev/docs/img/equation_triangular_stdev.svg" alt="Standard deviation for a triangular distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the lower limit, `b` is the upper limit, and `c` is the mode.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/triangular/stdev' );
```

#### stdev( a, b, c )

Returns the [standard deviation][standard-deviation] of a [triangular][triangular-distribution] distribution with minimum support `a`, maximum support`b`, and mode `c`.

```javascript
var v = stdev( 0.0, 1.0, 0.8 );
// returns ~0.216

v = stdev( 4.0, 12.0, 5.0 );
// returns ~1.78

v = stdev( 2.0, 8.0, 5.0 );
// returns ~1.225
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = stdev( NaN, 4.0, 2.0 );
// returns NaN

v = stdev( 0.0, NaN, 2.0 );
// returns NaN

v = stdev( 0.0, 4.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = stdev( 1.0, 0.0, 1.5 );
// returns NaN

y = stdev( 0.0, 1.0, -1.0 );
// returns NaN

y = stdev( 0.0, -1.0, 0.5 );
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
var stdev = require( '@stdlib/stats/base/dists/triangular/stdev' );

var a;
var b;
var c;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = ( randu()*10.0 );
    b = ( randu()*10.0 ) + a;
    c = ( randu()*( b-a ) ) + a;
    v = stdev( a, b, c );
    console.log( 'a: %d, b: %d, c: %d, SD(X;a,b,c): %d', a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/triangular/stdev.h"
```

#### stdlib_base_dists_triangular_stdev( a, b, c )

Returns the [standard deviation][standard-deviation] of a [triangular][triangular-distribution] distribution with minimum support `a`, maximum support`b`, and mode `c`.

```c
double out = stdlib_base_dists_triangular_stdev( 0.0, 1.0, 0.5 );
// returns ~0.204
```

The function accepts the following arguments:

-   **a**: `[in] double` minimum support.
-   **b**: `[in] double` maximum support.
-   **c**: `[in] double` mode.

```c
double stdlib_base_dists_triangular_stdev( const double a, const double b, const double c );
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
#include "stdlib/stats/base/dists/triangular/stdev.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double a;
    double b;
    double c;
    double v;
    int i;

    for ( i = 0; i < 25; i++ ) {
        a = random_uniform( 0.0, 10.0 );
        b = random_uniform( a, a+10.0 );
        c = random_uniform( a, b );
        v = stdlib_base_dists_triangular_stdev( a, b, c );
        printf( "a: %lf, b: %lf, c: %lf, SD(X;a,b,c): %lf\n", a, b, c, v );
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

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
