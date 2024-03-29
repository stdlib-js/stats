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

# incrcovmat

> Compute an [unbiased sample covariance matrix][covariance-matrix] incrementally.

<section class="intro">

A [covariance matrix][covariance-matrix] is an M-by-M matrix whose elements specified by indices `j` and `k` are the [covariances][covariance-matrix] between the jth and kth data variables. For unknown population means, the [unbiased sample covariance][covariance-matrix] is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_covariance_unknown_means" align="center" raw="\operatorname{cov_{jkn}} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_{ij} - \bar{x}_{jn})(x_{ik} - \bar{x}_{kn})" alt="Equation for the unbiased sample covariance for unknown population means."> -->

```math
\mathop{\mathrm{cov_{jkn}}} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_{ij} - \bar{x}_{jn})(x_{ik} - \bar{x}_{kn})
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{cov_{jkn}} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_{ij} - \bar{x}_{jn})(x_{ik} - \bar{x}_{kn})" data-equation="eq:unbiased_sample_covariance_unknown_means">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/covmat/docs/img/equation_unbiased_sample_covariance_unknown_means.svg" alt="Equation for the unbiased sample covariance for unknown population means.">
    <br>
</div> -->

<!-- </equation> -->

For known population means, the [unbiased sample covariance][covariance-matrix] is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_covariance_known_means" align="center" raw="\operatorname{cov_{jkn}} = \frac{1}{n} \sum_{i=0}^{n-1} (x_{ij} - \mu_{j})(x_{ik} - \mu_{k})" alt="Equation for the unbiased sample covariance for known population means."> -->

```math
\mathop{\mathrm{cov_{jkn}}} = \frac{1}{n} \sum_{i=0}^{n-1} (x_{ij} - \mu_{j})(x_{ik} - \mu_{k})
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{cov_{jkn}} = \frac{1}{n} \sum_{i=0}^{n-1} (x_{ij} - \mu_{j})(x_{ik} - \mu_{k})" data-equation="eq:unbiased_sample_covariance_known_means">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@566f739b0d9a5b720546f84f74de841b8d5e0c54/lib/node_modules/@stdlib/stats/incr/covmat/docs/img/equation_unbiased_sample_covariance_known_means.svg" alt="Equation for the unbiased sample covariance for known population means.">
    <br>
</div> -->

<!-- </equation> --> 

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrcovmat = require( '@stdlib/stats/incr/covmat' );
```

#### incrcovmat( out\[, means] )

Returns an accumulator `function` which incrementally computes an [unbiased sample covariance matrix][covariance-matrix].

```javascript
// Create an accumulator for computing a 2-dimensional covariance matrix:
var accumulator = incrcovmat( 2 );
```

The `out` argument may be either the order of the [covariance matrix][covariance-matrix] or a square 2-dimensional [`ndarray`][@stdlib/ndarray/ctor] for storing the [unbiased sample covariance matrix][covariance-matrix].

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var buffer = new Float64Array( 4 );
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];

// Create a 2-dimensional output covariance matrix:
var cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

var accumulator = incrcovmat( cov );
```

When means are known, the function supports providing a 1-dimensional [`ndarray`][@stdlib/ndarray/ctor] containing mean values.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var buffer = new Float64Array( 2 );
var shape = [ 2 ];
var strides = [ 1 ];

var means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

means.set( 0, 3.0 );
means.set( 1, -5.5 );

var accumulator = incrcovmat( 2, means );
```

#### accumulator( \[vector] )

If provided a data vector, the accumulator function returns an updated [unbiased sample covariance matrix][covariance-matrix]. If not provided a data vector, the accumulator function returns the current [unbiased sample covariance matrix][covariance-matrix].

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var buffer = new Float64Array( 4 );
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];
var cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

buffer = new Float64Array( 2 );
shape = [ 2 ];
strides = [ 1 ];
var vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

var accumulator = incrcovmat( cov );

vec.set( 0, 2.0 );
vec.set( 1, 1.0 );

var out = accumulator( vec );
// returns <ndarray>

var bool = ( out === cov );
// returns true

vec.set( 0, 1.0 );
vec.set( 1, -5.0 );

out = accumulator( vec );
// returns <ndarray>

vec.set( 0, 3.0 );
vec.set( 1, 3.14 );

out = accumulator( vec );
// returns <ndarray>

out = accumulator();
// returns <ndarray>
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var incrcovmat = require( '@stdlib/stats/incr/covmat' );

var cov;
var cxy;
var cyx;
var vx;
var vy;
var i;

// Initialize an accumulator for a 2-dimensional covariance matrix:
var accumulator = incrcovmat( 2 );

// Create a 1-dimensional data vector:
var buffer = new Float64Array( 2 );
var shape = [ 2 ];
var strides = [ 1 ];

var vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

// For each simulated data vector, update the unbiased sample covariance matrix...
for ( i = 0; i < 100; i++ ) {
    vec.set( 0, randu()*100.0 );
    vec.set( 1, randu()*100.0 );
    cov = accumulator( vec );

    vx = cov.get( 0, 0 ).toFixed( 4 );
    vy = cov.get( 1, 1 ).toFixed( 4 );
    cxy = cov.get( 0, 1 ).toFixed( 4 );
    cyx = cov.get( 1, 0 ).toFixed( 4 );

    console.log( '[ %d, %d\n  %d, %d ]', vx, cxy, cyx, vy );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/covariance`][@stdlib/stats/incr/covariance]</span><span class="delimiter">: </span><span class="description">compute an unbiased sample covariance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/pcorrmat`][@stdlib/stats/incr/pcorrmat]</span><span class="delimiter">: </span><span class="description">compute a sample Pearson product-moment correlation matrix incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[covariance-matrix]: https://en.wikipedia.org/wiki/Covariance_matrix

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

<!-- <related-links> -->

[@stdlib/stats/incr/covariance]: https://github.com/stdlib-js/stats/tree/main/incr/covariance

[@stdlib/stats/incr/pcorrmat]: https://github.com/stdlib-js/stats/tree/main/incr/pcorrmat

<!-- </related-links> -->

</section>

<!-- /.links -->
