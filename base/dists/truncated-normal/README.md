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

# Truncated Normal

> Truncated normal distribution.

<section class="usage">

## Usage

```javascript
var truncatedNormal = require( '@stdlib/stats/base/dists/truncated-normal' );
```

#### truncatedNormal

Truncated normal distribution.

```javascript
var dist = truncatedNormal;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`pdf( x, a, b, mu, sigma )`][@stdlib/stats/base/dists/truncated-normal/pdf]</span><span class="delimiter">: </span><span class="description">truncated normal distribution probability density function (PDF).</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<!-- </toc> -->

The namespace contains a constructor function for creating a [truncated normal][truncated-normal-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var truncatedNormal = require( '@stdlib/stats/base/dists/truncated-normal' );

/*
* Let's consider an example where we're modeling the heights of astronauts.
* We'll use the truncated normal distribution to model this scenario, considering constraints on their minimum and maximum heights.
* The distribution has parameters: a (minimum height), b (maximum height), mu (location parameter), and sigma (scale parameter).
* In this example, we'll assume a = 150 (minimum height), b = 200 (maximum height), mu = 175 (location parameter), and sigma = 10 (scale parameter).
*/

var a = 150.0;
var b = 200.0;
var mu = 175.0;
var sigma = 10.0;

// Calculate the probability density function (PDF) for a height of 180 cm:
console.log( truncatedNormal.pdf( 180, a, b, mu, sigma ) );
// => ~0.036
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[truncated-normal-distribution]: https://en.wikipedia.org/wiki/Truncated_normal_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/truncated-normal/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/truncated-normal/pdf

<!-- </toc-links> -->

</section>

<!-- /.links -->
