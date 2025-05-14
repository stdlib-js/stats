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

# Quantile Function

> [Arcsine][arcsine-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for an [arcsine][arcsine-distribution] random variable is

<!-- <equation class="equation" label="eq:arcsine_quantile_function" align="center" raw="Q(p) = a + ( b - a ) \sin^2 \left( \tfrac{\pi}{2} p \right)" alt="Quantile function for an arcsine distribution."> -->

```math
Q(p) = a + ( b - a ) \sin^2 \left( \tfrac{\pi}{2} p \right)
```

<!-- <div class="equation" align="center" data-raw-text="Q(p) = a + ( b - a ) \sin^2 \left( \tfrac{\pi}{2} p \right)" data-equation="eq:arcsine_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/arcsine/quantile/docs/img/equation_arcsine_quantile_function.svg" alt="Quantile function for an arcsine distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p <= 1`, where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/arcsine/quantile' );
```

#### quantile( p, a, b )

Evaluates the [quantile function][quantile-function] for an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = quantile( 0.8, 0.0, 1.0 );
// returns ~0.905

y = quantile( 0.5, 0.0, 10.0 );
// returns ~5.0
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 2.0, 1.0 );
// returns NaN
```

#### quantile.factory( a, b )

Returns a function for evaluating the quantile function of an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myquantile = quantile.factory( 0.0, 4.0 );

var y = myquantile( 0.8 );
// returns ~3.618
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var quantile = require( '@stdlib/stats/base/dists/arcsine/quantile' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 25, 0.0, 1.0, opts );
var a = uniform( p.length, 0.0, 10.0, opts );
var b = uniform( a.length, 10.0, 50.0, opts );

logEachMap( 'p: %0.4f, a: %0.4f, b: %0.4f, Q(p;a,b): %0.4f', p, a, b, quantile );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
