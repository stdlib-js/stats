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

# Logarithm of Probability Density Function

> Evaluate the natural logarithm of the probability density function (PDF) for a [normal][normal-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [normal][normal-distribution] random variable is

<!-- <equation class="equation" label="eq:normal_normal_pdf" align="center" raw="f(x;\mu,\sigma)=\frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x - \mu)^2}{2 \sigma^2}}" alt="Probability density function (PDF) for a normal distribution."> -->

```math
f(x;\mu,\sigma)=\frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x - \mu)^2}{2 \sigma^2}}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\mu,\sigma)=\frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x - \mu)^2}{2 \sigma^2}}" data-equation="eq:normal_normal_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/normal/logpdf/docs/img/equation_normal_normal_pdf.svg" alt="Probability density function (PDF) for a normal distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `µ` is the mean and `σ` is the standard deviation.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/normal/logpdf' );
```

#### logpdf( x, mu, sigma )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [normal][normal-distribution] distribution with parameters `mu` (mean) and `sigma` (standard deviation).

```javascript
var y = logpdf( 2.0, 0.0, 1.0 );
// returns ~-2.919

y = logpdf( -1.0, 4.0, 2.0 );
// returns ~-4.737
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, -1.0 );
// returns NaN
```

If provided `sigma = 0`, the function evaluates the natural logarithm of the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = logpdf( 2.0, 8.0, 0.0 );
// returns -Infinity

y = logpdf( 8.0, 8.0, 0.0 );
// returns Infinity
```

#### logpdf.factory( mu, sigma )

Returns a `function` for evaluating the [probability density function][pdf] (PDF) of a [normal][normal-distribution] distribution with parameters `mu` (mean) and `sigma` (standard deviation).

```javascript
var mylogpdf = logpdf.factory( 10.0, 2.0 );

var y = mylogpdf( 10.0 );
// returns ~-1.612

y = mylogpdf( 5.0 );
// returns ~-4.737
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var logpdf = require( '@stdlib/stats/base/dists/normal/logpdf' );

var sigma;
var mu;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    mu = (randu() * 10.0) - 5.0;
    sigma = randu() * 20.0;
    y = logpdf( x, mu, sigma );
    console.log( 'x: %d, µ: %d, σ: %d, ln(f(x;µ,σ)): %d', x, mu, sigma, y );
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
#include "stdlib/stats/base/dists/normal/logpdf.h"
```

#### stdlib_base_dists_normal_logpdf( x, mu, sigma )

Evaluates the natural logarithm of the probability density function (logPDF) for a normal distribution.

```c
double out = stdlib_base_dists_normal_pdf( 2.0, 0.0, 1.0 );
// returns ~-2.919
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` mean.
-   **sigma**: `[in] double` standard deviation.

```c
double stdlib_base_dists_normal_logpdf( cconst double x, const double mu, const double sigma );
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
#include "stdlib/stats/base/dists/normal/logpdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double mu;
    double x;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        mu = random_uniform( -5.0, 5.0 );
        sigma = random_uniform( 0.1, 20.0 );
        y = stdlib_base_dists_normal_logpdf( x, mu, sigma );
        printf( "x: %lf, µ: %lf, σ: %lf, ln(f(x;µ,σ)): %lf\n", x, mu, sigma, y );
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

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
