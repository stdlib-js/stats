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

# Statistics

> Statistical functions for arrays.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/stats/array' );
```

#### ns

Namespace containing APIs for performing statistical operations on arrays.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`maxBy( x, clbk[, thisArg] )`][@stdlib/stats/array/max-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array via a callback function.</span>
-   <span class="signature">[`max( x )`][@stdlib/stats/array/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array.</span>
-   <span class="signature">[`maxabs( x )`][@stdlib/stats/array/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of an array.</span>
-   <span class="signature">[`maxsorted( x )`][@stdlib/stats/array/maxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted array.</span>
-   <span class="signature">[`mean( x )`][@stdlib/stats/array/mean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array.</span>
-   <span class="signature">[`mediansorted( x )`][@stdlib/stats/array/mediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted array.</span>
-   <span class="signature">[`minBy( x, clbk[, thisArg] )`][@stdlib/stats/array/min-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array via a callback function.</span>
-   <span class="signature">[`min( x )`][@stdlib/stats/array/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array.</span>
-   <span class="signature">[`minabs( x )`][@stdlib/stats/array/minabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of an array.</span>
-   <span class="signature">[`minsorted( x )`][@stdlib/stats/array/minsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted array.</span>
-   <span class="signature">[`mskmax( x, mask )`][@stdlib/stats/array/mskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array according to a mask.</span>
-   <span class="signature">[`mskmin( x, mask )`][@stdlib/stats/array/mskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array according to a mask.</span>
-   <span class="signature">[`mskrange( x, mask )`][@stdlib/stats/array/mskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of an array according to a mask.</span>
-   <span class="signature">[`nanmaxBy( x, clbk[, thisArg] )`][@stdlib/stats/array/nanmax-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmax( x )`][@stdlib/stats/array/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmaxabs( x )`][@stdlib/stats/array/nanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmin( x )`][@stdlib/stats/array/nanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrange( x )`][@stdlib/stats/array/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`varianceyc( x[, correction] )`][@stdlib/stats/array/varianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array using a one-pass algorithm proposed by Youngs and Cramer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/stats/array' );

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

[@stdlib/stats/array/max-by]: https://github.com/stdlib-js/stats/tree/main/array/max-by

[@stdlib/stats/array/max]: https://github.com/stdlib-js/stats/tree/main/array/max

[@stdlib/stats/array/maxabs]: https://github.com/stdlib-js/stats/tree/main/array/maxabs

[@stdlib/stats/array/maxsorted]: https://github.com/stdlib-js/stats/tree/main/array/maxsorted

[@stdlib/stats/array/mean]: https://github.com/stdlib-js/stats/tree/main/array/mean

[@stdlib/stats/array/mediansorted]: https://github.com/stdlib-js/stats/tree/main/array/mediansorted

[@stdlib/stats/array/min-by]: https://github.com/stdlib-js/stats/tree/main/array/min-by

[@stdlib/stats/array/min]: https://github.com/stdlib-js/stats/tree/main/array/min

[@stdlib/stats/array/minabs]: https://github.com/stdlib-js/stats/tree/main/array/minabs

[@stdlib/stats/array/minsorted]: https://github.com/stdlib-js/stats/tree/main/array/minsorted

[@stdlib/stats/array/mskmax]: https://github.com/stdlib-js/stats/tree/main/array/mskmax

[@stdlib/stats/array/mskmin]: https://github.com/stdlib-js/stats/tree/main/array/mskmin

[@stdlib/stats/array/mskrange]: https://github.com/stdlib-js/stats/tree/main/array/mskrange

[@stdlib/stats/array/nanmax-by]: https://github.com/stdlib-js/stats/tree/main/array/nanmax-by

[@stdlib/stats/array/nanmax]: https://github.com/stdlib-js/stats/tree/main/array/nanmax

[@stdlib/stats/array/nanmaxabs]: https://github.com/stdlib-js/stats/tree/main/array/nanmaxabs

[@stdlib/stats/array/nanmin]: https://github.com/stdlib-js/stats/tree/main/array/nanmin

[@stdlib/stats/array/nanrange]: https://github.com/stdlib-js/stats/tree/main/array/nanrange

[@stdlib/stats/array/varianceyc]: https://github.com/stdlib-js/stats/tree/main/array/varianceyc

<!-- </toc-links> -->

</section>

<!-- /.links -->
