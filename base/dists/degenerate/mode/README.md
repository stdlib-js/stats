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

# Mode

> [Degenerate][degenerate-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [degenerate][degenerate-distribution] random variable is

<!-- <equation class="equation" label="eq:degenerate_mode" align="center" raw="\operatorname{Mode}\left( X \right) = \mu" alt="Mode for a degenerate distribution."> -->

```math
\mathop{\mathrm{Mode}}\left( X \right) = \mu
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Mode}\left( X \right) = \mu" data-equation="eq:degenerate_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e1fbdee688c5409e4cc6b0cd06d90b1cd2abd67c/lib/node_modules/@stdlib/stats/base/dists/degenerate/mode/docs/img/equation_degenerate_mode.svg" alt="Mode for a degenerate distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the constant value of the distribution.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/degenerate/mode' );
```

#### mode( mu )

Returns the [mode][mode] of a [degenerate][degenerate-distribution] distribution with constant value `mu`.

```javascript
var v = mode( 10.0 );
// returns 10.0

v = mode( -0.5 );
// returns -0.5
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
var mode = require( '@stdlib/stats/base/dists/degenerate/mode' );

var opts = {
    'dtype': 'float64'
};
var mu = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'µ: %0.4f, mode(X;µ): %0.4f', mu, mode );
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
#include "stdlib/stats/base/dists/degenerate/mode.h"
```

#### stdlib_base_dists_degenerate_mode( mu )

Returns the [mode][mode] of a [degenerate][degenerate-distribution] distribution with constant value `mu`.

```c
double out = stdlib_base_dists_degenerate_mode( 0.1 );
// returns 0.1
```

The function accepts the following arguments:

-   **mu**: `[in] double` constant value of the distribution.

```c
double stdlib_base_dists_degenerate_mode( const double mu );
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
#include "stdlib/stats/base/dists/degenerate/mode.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double mu;
    double m;
    int i;

    for ( i = 0; i < 10; i++ ) {
        mu = random_uniform( 0.0, 20.0 );
        m = stdlib_base_dists_degenerate_mode( mu );
        printf( "µ: %lf, mode(X;µ): %lf\n", mu, m );
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

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
