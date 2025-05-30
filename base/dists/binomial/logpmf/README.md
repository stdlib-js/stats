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

# Logarithm of Probability Mass Function

> Evaluate the natural logarithm of the probability mass function (PMF) for a [binomial][binomial-distribution] distribution.

<section class="intro">

The [probability mass function][pmf] (PMF) for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_pmf" align="center" raw="f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}" alt="Probability mass function (PMF) for a binomial distribution."> -->

```math
f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} &amp; \text{ for } x = 0,1,2,\ldots \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:binomial_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/logpmf/docs/img/equation_binomial_pmf.svg" alt="Probability mass function (PMF) for a binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `n` is the number of trials and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpmf = require( '@stdlib/stats/base/dists/binomial/logpmf' );
```

#### logpmf( x, n, p )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF) for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var y = logpmf( 3.0, 20, 0.2 );
// returns ~-1.583

y = logpmf( 21.0, 20, 0.2 );
// returns -Infinity

y = logpmf( 5.0, 10, 0.4 );
// returns ~-1.606

y = logpmf( 0.0, 10, 0.4 );
// returns ~-5.108
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, 20, 0.5 );
// returns NaN

y = logpmf( 0.0, NaN, 0.5 );
// returns NaN

y = logpmf( 0.0, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 1.5, 0.5 );
// returns NaN

y = logpmf( 2.0, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 20, -1.0 );
// returns NaN

y = logpmf( 2.0, 20, 1.5 );
// returns NaN
```

#### logpmf.factory( n, p )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var mylogpmf = logpmf.factory( 10, 0.5 );

var y = mylogpmf( 3.0 );
// returns ~-2.144

y = mylogpmf( 5.0 );
// returns ~-1.402
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
var logpmf = require( '@stdlib/stats/base/dists/binomial/logpmf' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 20, opts );
var n = discreteUniform( 10, 0, 100, opts );
var p = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'x: %0.4f, n: %0.4f, p: %0.4f, ln(P(X = x;n,p)): %0.4f', x, n, p, logpmf );
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

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
