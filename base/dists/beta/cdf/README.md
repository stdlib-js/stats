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

# Cumulative Distribution Function

> [Beta][beta-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [beta][beta-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_cdf" align="center" raw="F(x;\alpha,\beta) = \frac{\operatorname{Beta}(x;\alpha,\beta)}{\operatorname{Beta}(\alpha,\beta)}" alt="Cumulative distribution function for a beta distribution."> -->

```math
F(x;\alpha,\beta) = \frac{\mathop{\mathrm{Beta}}(x;\alpha,\beta)}{\mathop{\mathrm{Beta}}(\alpha,\beta)}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\alpha,\beta) = \frac{\operatorname{Beta}(x;\alpha,\beta)}{\operatorname{Beta}(\alpha,\beta)}" data-equation="eq:beta_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/beta/cdf/docs/img/equation_beta_cdf.svg" alt="Cumulative distribution function for a beta distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha > 0` is the first shape parameter and `beta > 0` is the second shape parameter. In the definition, `Beta( x; a, b )` denotes the lower incomplete beta function and `Beta( a, b )` the [beta function][beta-function].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/beta/cdf' );
```

#### cdf( x, alpha, beta )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = cdf( 0.5, 1.0, 1.0 );
// returns 0.5

y = cdf( 0.5, 2.0, 4.0 );
// returns ~0.813

y = cdf( 0.2, 2.0, 2.0 );
// returns ~0.104

y = cdf( 0.8, 4.0, 4.0 );
// returns ~0.967

y = cdf( -0.5, 4.0, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = cdf( 1.5, 4.0, 2.0 );
// returns 1.0

y = cdf( +Infinity, 4.0, 2.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 0.5 );
// returns NaN

y = cdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.5, -1.0 );
// returns NaN

y = cdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### cdf.factory( alpha, beta )

Returns a function for evaluating the [cumulative distribution function][cdf] for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var mycdf = cdf.factory( 0.5, 0.5 );

var y = mycdf( 0.8 );
// returns ~0.705

y = mycdf( 0.3 );
// returns ~0.369
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var EPS = require( '@stdlib/constants/float64/eps' );
var cdf = require( '@stdlib/stats/base/dists/beta/cdf' );

var opts = {
    'dtype': 'float64'
};
var alpha = uniform( 10, EPS, 5.0, opts );
var beta = uniform( 10, EPS, 5.0, opts );
var x = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'x: %0.4f, α: %0.4f, β: %0.4f, F(x;α,β): %0.4f', x, alpha, beta, cdf );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
