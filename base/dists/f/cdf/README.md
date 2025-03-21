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

> [F][f-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [F][f-distribution] random variable is

<!-- <equation class="equation" label="eq:f_cdf" align="center" raw="F(x; d_1,d_2)=I_{\frac{d_1 x}{d_1 x + d_2}}\left (\tfrac{d_1}{2}, \tfrac{d_2}{2} \right)" alt="Cumulative distribution function for an F distribution."> -->

```math
F(x; d_1,d_2)=I_{\frac{d_1 x}{d_1 x + d_2}}\left (\tfrac{d_1}{2}, \tfrac{d_2}{2} \right)
```

<!-- <div class="equation" align="center" data-raw-text="F(x; d_1,d_2)=I_{\frac{d_1 x}{d_1 x + d_2}}\left (\tfrac{d_1}{2}, \tfrac{d_2}{2} \right)" data-equation="eq:f_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/f/cdf/docs/img/equation_f_cdf.svg" alt="Cumulative distribution function for an F distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `d1` is the numerator degrees of freedom, `d2` is the denominator degrees of freedom and `I_{x}(a,b)` is the [lower regularized incomplete beta function][@stdlib/math/base/special/betainc].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/f/cdf' );
```

#### cdf( x, d1, d2 )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var y = cdf( 2.0, 1.0, 1.0 );
// returns ~0.608

y = cdf( 2.0, 8.0, 4.0 );
// returns ~0.737

y = cdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = cdf( 0.0, 4.0, 4.0 );
// returns 0.0

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

If provided `d1 <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 0.5 );
// returns NaN

y = cdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `d2 <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.5, -1.0 );
// returns NaN

y = cdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### cdf.factory( d1, d2 )

Returns a function for evaluating the [cumulative distribution function][cdf] of an [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var mycdf = cdf.factory( 10.0, 2.0 );

var y = mycdf( 10.0 );
// returns ~0.906

y = mycdf( 8.0 );
// returns ~0.884
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/f/cdf' );

var d1;
var d2;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    d1 = randu() * 10.0;
    d2 = randu() * 10.0;
    y = cdf( x, d1, d2 );
    console.log( 'x: %d, d1: %d, d2: %d, F(x;d1,d2): %d', x.toFixed( 4 ), d1.toFixed( 4 ), d2.toFixed( 4 ), y.toFixed( 4 ) );
}
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

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[@stdlib/math/base/special/betainc]: https://github.com/stdlib-js/math-base-special-betainc

</section>

<!-- /.links -->
