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

> [Fréchet][frechet-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_mode" align="center" raw="\operatorname{mode} = m+s\left({\frac{\alpha}{1+\alpha }}\right)^{{1/\alpha }}" alt="Mode for a Fréchet distribution."> -->

```math
\mathop{\mathrm{mode}} = m+s\left({\frac{\alpha}{1+\alpha }}\right)^{{1/\alpha }}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{mode} = m+s\left({\frac{\alpha}{1+\alpha }}\right)^{{1/\alpha }}" data-equation="eq:frechet_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/frechet/mode/docs/img/equation_frechet_mode.svg" alt="Mode for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/frechet/mode' );
```

#### mode( alpha, s, m )

Returns the [mode][mode] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m`.

```javascript
var y = mode( 2.0, 1.0, 1.0 );
// returns ~1.816

y = mode( 1.0, 2.0, -3.0 );
// returns -2.0

y = mode( 1.0, 1.0, 2.0 );
// returns ~2.5
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mode( NaN, 1.0, -2.0 );
// returns NaN

y = mode( 1.0, NaN, -2.0 );
// returns NaN

y = mode( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = mode( 0.0, 3.0, 2.0 );
// returns NaN

y = mode( 0.0, -1.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = mode( 1.0, 0.0, 2.0 );
// returns NaN

y = mode( 1.0, -1.0, 2.0 );
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
var EPS = require( '@stdlib/constants/float64/eps' );
var mode = require( '@stdlib/stats/base/dists/frechet/mode' );

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*40.0 ) - 20.0;
    y = mode( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, mode(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/frechet/mode.h"
```

#### stdlib_base_dists_frechet_mode( alpha, s, m )

Returns the mode for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.

```c
double y = stdlib_base_dists_frechet_mode( 5.0, 2.0, 0.0 );
// returns ~1.928
```

The function accepts the following arguments:

-   **alpha**: `[in] double` shape parameter.
-   **s**: `[in] double` scale parameter.
-   **m**: `[in] double` location parameter.

```c
double stdlib_base_dists_frechet_mode( const double alpha, const double s, const double m );
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
#include "stdlib/stats/base/dists/frechet/mode.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
   double alpha;
   double s;
   double m;
   double y;
   int i;

    for ( i = 0; i < 10; i++ ) {
       alpha = random_uniform( 0.0, 20.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
       s = random_uniform( 0.0, 20.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
       m = random_uniform( 0.0, 20.0 ) - 40.0;
       y = stdlib_base_dists_frechet_mode( alpha, s, m );
       printf( "α: %.4lf, s: %.4lf, m: %.4lf, Mode(X;α,s,m): %.4lf\n", alpha, s, m, y );
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

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
