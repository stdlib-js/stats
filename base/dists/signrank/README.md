<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Signed Rank

> Distribution of the Wilcoxon signed rank test statistic.

<section class="usage">

## Usage

```javascript
var signrank = require( '@stdlib/stats/base/dists/signrank' );
```

#### signrank

Distribution of the Wilcoxon signed rank test statistic.

```javascript
var dist = signrank;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, n )`][@stdlib/stats/base/dists/signrank/cdf]</span><span class="delimiter">: </span><span class="description">Wilcoxon signed rank test statistic cumulative distribution function.</span>
-   <span class="signature">[`pdf( x, n )`][@stdlib/stats/base/dists/signrank/pdf]</span><span class="delimiter">: </span><span class="description">Wilcoxon signed rank test statistic probability density function.</span>
-   <span class="signature">[`quantile( p, n )`][@stdlib/stats/base/dists/signrank/quantile]</span><span class="delimiter">: </span><span class="description">Wilcoxon signed rank test statistic quantile function.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var signrank = require( '@stdlib/stats/base/dists/signrank' );

console.log( objectKeys( signrank ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/stats/base/dists/signrank/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/signrank/cdf

[@stdlib/stats/base/dists/signrank/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/signrank/pdf

[@stdlib/stats/base/dists/signrank/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/signrank/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
