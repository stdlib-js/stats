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

# Entropy

> [Binomial][binomial-distribution] distribution [entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [entropy][entropy] (in [nats][nats]) for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_entropy" align="center" raw="H\left( X \right) = {\frac {1}{2}}\ln{\left(2\pi\,e\,np\,(1-p) \right)}" alt="Entropy for a binomial distribution."> -->

```math
H\left( X \right) = {\frac {1}{2}}\ln{\left(2\pi\,e\,np\,(1-p) \right)}
```

<!-- <div class="equation" align="center" data-raw-text="H\left( X \right) = {\frac {1}{2}}\ln{\left(2\pi\,e\,np\,(1-p) \right)}" data-equation="eq:binomial_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/binomial/entropy/docs/img/equation_binomial_entropy.svg" alt="Entropy for a binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `n` is the number of trials and `p` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/binomial/entropy' );
```

#### entropy( n, p )

Returns the [entropy][entropy] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p` (in [nats][nats]).

```javascript
var v = entropy( 20, 0.1 );
// returns ~1.667

v = entropy( 50, 0.5 );
// returns ~2.682
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = entropy( NaN, 0.5 );
// returns NaN

v = entropy( 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = entropy( 1.5, 0.5 );
// returns NaN

v = entropy( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = entropy( 20, -1.0 );
// returns NaN

v = entropy( 20, 1.5 );
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var entropy = require( '@stdlib/stats/base/dists/binomial/entropy' );

var opts = {
    'dtype': 'float64'
};
var n = discreteUniform( 10, 0, 100, opts );
var p = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'n: %0.4f, p: %0.4f, H(X;n,p): %0.4f', n, p, entropy );
```

</section>

<!-- /.examples -->

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

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
