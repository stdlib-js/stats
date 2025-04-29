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

> [Binomial][binomial-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_cdf" align="center" raw="F(x;n,p) = \sum_{i=0}^{\lfloor x \rfloor} {n\choose i}p^i(1-p)^{n-i}" alt="Cumulative distribution function for a Binomial distribution."> -->

```math
F(x;n,p) = \sum_{i=0}^{\lfloor x \rfloor} {n\choose i}p^i(1-p)^{n-i}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;n,p) = \sum_{i=0}^{\lfloor x \rfloor} {n\choose i}p^i(1-p)^{n-i}" data-equation="eq:binomial_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/cdf/docs/img/equation_binomial_cdf.svg" alt="Cumulative distribution function for a Binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `n` is the number of trials and `p` is the success probability. The CDF can be equivalently expressed as

<!-- <equation class="equation" label="eq:binomial_cdf_incomplete_beta" align="center" raw="F(x;n,p) = I_{1-p}( n-x, x+1 )" alt="Cumulative distribution function for a Binomial distribution expressed using the incomplete beta function."> -->

```math
F(x;n,p) = I_{1-p}( n-x, x+1 )
```

<!-- <div class="equation" align="center" data-raw-text="F(x;n,p) = I_{1-p}( n-x, x+1 )" data-equation="eq:binomial_cdf_incomplete_beta">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/cdf/docs/img/equation_binomial_cdf_incomplete_beta.svg" alt="Cumulative distribution function for a Binomial distribution expressed using the incomplete beta function.">
    <br>
</div> -->

<!-- </equation> -->

where `I` is the [lower regularized incomplete beta function][incomplete-beta].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/binomial/cdf' );
```

#### cdf( x, n, p )

Evaluates the [cumulative distribution function][cdf] for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var y = cdf( 3.0, 20, 0.2 );
// returns ~0.411

y = cdf( 21.0, 20, 0.2 );
// returns 1.0

y = cdf( 5.0, 10, 0.4 );
// returns ~0.834

y = cdf( 0.0, 10, 0.4 );
// returns ~0.006
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 20, 0.5 );
// returns NaN

y = cdf( 0.0, NaN, 0.5 );
// returns NaN

y = cdf( 0.0, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 1.5, 0.5 );
// returns NaN

y = cdf( 2.0, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 20, -1.0 );
// returns NaN

y = cdf( 2.0, 20, 1.5 );
// returns NaN
```

#### cdf.factory( n, p )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var mycdf = cdf.factory( 10, 0.5 );

var y = mycdf( 3.0 );
// returns ~0.172

y = mycdf( 1.0 );
// returns ~0.011
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cdf = require( '@stdlib/stats/base/dists/binomial/cdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.0, 20.0, opts );
var n = discreteUniform( 10, 0, 100, opts );
var p = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'x: %0.4f, n: %0.4f, p: %0.4f, F(x;n,p): %0.4f', x, n, p, cdf );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[incomplete-beta]: https://en.wikipedia.org/wiki/Beta_function#Incomplete_beta_function

</section>

<!-- /.links -->
