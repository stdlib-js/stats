<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Base

> Base ndarray statistical functions.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/stats/base/ndarray' );
```

#### ns

Namespace containing base ndarray statistical functions.

```javascript
var o = ns;
// returns {...}
```

The namespace exposes the following APIs:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cumax( arrays )`][@stdlib/stats/base/ndarray/cumax]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum value of a one-dimensional ndarray.</span>
-   <span class="signature">[`dcumax( arrays )`][@stdlib/stats/base/ndarray/dcumax]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmax( arrays )`][@stdlib/stats/base/ndarray/dmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dztest( arrays )`][@stdlib/stats/base/ndarray/dztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`maxBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/max-by]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional ndarray via a callback function.</span>
-   <span class="signature">[`max( arrays )`][@stdlib/stats/base/ndarray/max]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional ndarray.</span>
-   <span class="signature">[`scumax( arrays )`][@stdlib/stats/base/ndarray/scumax]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smax( arrays )`][@stdlib/stats/base/ndarray/smax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sztest( arrays )`][@stdlib/stats/base/ndarray/sztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a one-dimensional single-precision floating-point ndarray.</span>

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
var ns = require( '@stdlib/stats/base/ndarray' );

console.log( objectKeys( ns ) );
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

[@stdlib/stats/base/ndarray/cumax]: https://github.com/stdlib-js/stats/tree/main/base/ndarray/cumax

[@stdlib/stats/base/ndarray/dcumax]: https://github.com/stdlib-js/stats/tree/main/base/ndarray/dcumax

[@stdlib/stats/base/ndarray/dmax]: https://github.com/stdlib-js/stats/tree/main/base/ndarray/dmax

[@stdlib/stats/base/ndarray/dztest]: https://github.com/stdlib-js/stats/tree/main/base/ndarray/dztest

[@stdlib/stats/base/ndarray/max-by]: https://github.com/stdlib-js/stats/tree/main/base/ndarray/max-by

[@stdlib/stats/base/ndarray/max]: https://github.com/stdlib-js/stats/tree/main/base/ndarray/max

[@stdlib/stats/base/ndarray/scumax]: https://github.com/stdlib-js/stats/tree/main/base/ndarray/scumax

[@stdlib/stats/base/ndarray/smax]: https://github.com/stdlib-js/stats/tree/main/base/ndarray/smax

[@stdlib/stats/base/ndarray/sztest]: https://github.com/stdlib-js/stats/tree/main/base/ndarray/sztest

<!-- </toc-links> -->

</section>

<!-- /.links -->
