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

# Logarithm of Cumulative Distribution Function

> [Arcsine][arcsine-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for an [arcsine][arcsine-distribution] random variable is

<!-- <equation class="equation" label="eq:arcsine_cdf" align="center" raw="F(x) = \frac{2}{\pi} \arcsin \left( \sqrt{\frac{x-a}{b-a}} \right)" alt="Cumulative distribution function for an arcsine distribution."> -->

```math
F(x) = \frac{2}{\pi} \arcsin \left( \sqrt{\frac{x-a}{b-a}} \right)
```

<!-- <div class="equation" align="center" data-raw-text="F(x) = \frac{2}{\pi} \arcsin \left( \sqrt{\frac{x-a}{b-a}} \right)" data-equation="eq:arcsine_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/arcsine/logcdf/docs/img/equation_arcsine_cdf.svg" alt="Cumulative distribution function for an arcsine distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/arcsine/logcdf' );
```

#### logcdf( x, a, b )

Evaluates the logarithm of the [cumulative distribution function][cdf] (CDF) for an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = logcdf( 9.0, 0.0, 10.0 );
// returns ~-0.23

y = logcdf( 0.5, 0.0, 2.0 );
// returns ~-1.1

y = logcdf( -Infinity, 2.0, 4.0 );
// returns -Infinity

y = logcdf( +Infinity, 2.0, 4.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = logcdf( 1.0, 2.5, 2.0 );
// returns NaN
```

#### logcdf.factory( a, b )

Returns a function for evaluating the logarithm of the [cumulative distribution function][cdf] of an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var mylogcdf = logcdf.factory( 0.0, 10.0 );
var y = mylogcdf( 0.5 );
// returns ~-1.941

y = mylogcdf( 8.0 );
// returns ~-0.35
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var logcdf = require( '@stdlib/stats/base/dists/arcsine/logcdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 25, -10.0, 10.0, opts );
var a = uniform( x.length, -20.0, 0.0, opts );
var b = uniform( x.length, 0.0, 40.0, opts );

logEachMap( 'x: %0.4f, a: %0.4f, b: %0.4f, ln(F(x;a,b)): %0.4f', x, a, b, logcdf );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

</section>

<!-- /.links -->
