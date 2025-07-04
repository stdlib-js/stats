<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Mode

> Planck (discrete exponential) distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a Planck random variable with shape parameter `λ` is

<!-- <equation class="equation" label="eq:planck_mode" align="center" raw="\operatorname{mode}\left( X \right) = 0" alt="Mode for a Planck distribution."> -->

```math
\mathop{\mathrm{mode}}\left( X \right) = 0
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/planck/mode' );
```

#### mode( lambda )

Returns the [mode][mode] of a Planck distribution with shape parameter `lambda`.

```javascript
var v = mode( 0.1 );
// returns 0.0

v = mode( 1.5 );
// returns 0.0
```

If provided a shape parameter `lambda` is nonpositive or `NaN`, the function returns `NaN`.

```javascript
var v = mode( NaN );
// returns NaN

v = mode( -1.5 );
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
var mode = require( '@stdlib/stats/base/dists/planck/mode' );

var lambda = uniform( 10, 0.1, 5.0 );

var v;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    v = mode( lambda[ i ] );
    console.log( 'λ: %d, mode(X;λ): %d', lambda[ i ].toFixed( 4 ), v.toFixed( 4 ) );
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

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close.  -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/planck/mode.h"
```

#### stdlib_base_dists_planck_mode( lambda )

Returns the [mode][mode] of a Planck distribution with shape parameter `lambda`.

```c
double out = stdlib_base_dists_planck_mode( 0.1 );
// returns 0.0
```

The function accepts the following arguments:

-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_planck_mode( const double lambda );
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
#include "stdlib/stats/base/dists/planck/mode.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * (max - min) );
}

int main( void ) {
    double lambda;
    double y;
    int i;
    for ( i = 0; i < 25; i++ ) {
        lambda = random_uniform( 0.1, 10.0 );
        y = stdlib_base_dists_planck_mode( lambda );
        printf( "λ: %lf, mode(X;λ): %lf\n", lambda, y );
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

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
