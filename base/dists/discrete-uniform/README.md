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

# Discrete Uniform

> Discrete uniform distribution.

<section class="usage">

## Usage

```javascript
var discreteUniform = require( '@stdlib/stats/base/dists/discrete-uniform' );
```

#### discreteUniform

Discrete uniform distribution.

```javascript
var dist = discreteUniform;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, a, b )`][@stdlib/stats/base/dists/discrete-uniform/cdf]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, a, b )`][@stdlib/stats/base/dists/discrete-uniform/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function for a discrete uniform distribution.</span>
-   <span class="signature">[`logpmf( x, a, b )`][@stdlib/stats/base/dists/discrete-uniform/logpmf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability mass function (PMF) for a discrete uniform distribution.</span>
-   <span class="signature">[`mgf( t, a, b )`][@stdlib/stats/base/dists/discrete-uniform/mgf]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pmf( x, a, b )`][@stdlib/stats/base/dists/discrete-uniform/pmf]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( p, a, b )`][@stdlib/stats/base/dists/discrete-uniform/quantile]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( a, b )`][@stdlib/stats/base/dists/discrete-uniform/entropy]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution entropy.</span>
-   <span class="signature">[`kurtosis( a, b )`][@stdlib/stats/base/dists/discrete-uniform/kurtosis]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution excess kurtosis.</span>
-   <span class="signature">[`mean( a, b )`][@stdlib/stats/base/dists/discrete-uniform/mean]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution expected value.</span>
-   <span class="signature">[`median( a, b )`][@stdlib/stats/base/dists/discrete-uniform/median]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution median.</span>
-   <span class="signature">[`skewness( a, b )`][@stdlib/stats/base/dists/discrete-uniform/skewness]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution skewness.</span>
-   <span class="signature">[`stdev( a, b )`][@stdlib/stats/base/dists/discrete-uniform/stdev]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution standard deviation.</span>
-   <span class="signature">[`variance( a, b )`][@stdlib/stats/base/dists/discrete-uniform/variance]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [discrete uniform][discrete-uniform-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`DiscreteUniform( [a, b] )`][@stdlib/stats/base/dists/discrete-uniform/ctor]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var DiscreteUniform = require( '@stdlib/stats/base/dists/discrete-uniform' ).DiscreteUniform;

var dist = new DiscreteUniform( 2, 4 );

var y = dist.pmf( 3, 0 );
// returns ~0.333
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var discreteUniform = require( '@stdlib/stats/base/dists/discrete-uniform' );

console.log( objectKeys( discreteUniform ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/discrete-uniform/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/ctor

[@stdlib/stats/base/dists/discrete-uniform/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/entropy

[@stdlib/stats/base/dists/discrete-uniform/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/kurtosis

[@stdlib/stats/base/dists/discrete-uniform/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/mean

[@stdlib/stats/base/dists/discrete-uniform/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/median

[@stdlib/stats/base/dists/discrete-uniform/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/skewness

[@stdlib/stats/base/dists/discrete-uniform/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/stdev

[@stdlib/stats/base/dists/discrete-uniform/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/variance

[@stdlib/stats/base/dists/discrete-uniform/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/cdf

[@stdlib/stats/base/dists/discrete-uniform/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/logcdf

[@stdlib/stats/base/dists/discrete-uniform/logpmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/logpmf

[@stdlib/stats/base/dists/discrete-uniform/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/mgf

[@stdlib/stats/base/dists/discrete-uniform/pmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/pmf

[@stdlib/stats/base/dists/discrete-uniform/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
