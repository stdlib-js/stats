/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Returns the median of a Bradford distribution.
*
* ## Notes
*
* -   If `c <= 0`, the function returns `NaN`.
*
* @param c - shape parameter
* @returns median
*
* @example
* var v = median( 0.1 );
* // returns ~0.488
*
* @example
* var v = median( 0.5 );
* // returns ~0.449
*
* @example
* var v = median( 10.0 );
* // returns ~0.232
*
* @example
* var v = median( 0.0 );
* // returns NaN
*
* @example
* var v = median( -1.0 );
* // returns NaN
*
* @example
* var v = median( NaN );
* // returns NaN
*/
declare function median( c: number ): number;


// EXPORTS //

export = median;
