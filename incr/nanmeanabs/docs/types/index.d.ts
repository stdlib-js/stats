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
* If provided a value, returns an updated arithmetic mean; otherwise, returns the current arithmetic mean.
*
* @param x - value
* @returns arithmetic mean of absolute values
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes an arithmetic mean of absolute values, ignoring `NaN` values.
*
* @returns accumulator function
*
* @example
* var accumulator = incrnanmeanabs();
*
* var mu = accumulator();
* // returns null
*
* mu = accumulator( 2.0 );
* // returns 2.0
*
* mu = accumulator( NaN );
* // returns 2.0
*
* mu = accumulator( -3.0 );
* // returns 2.5
*
* mu = accumulator( -4.0 );
* // returns 3.0
*
* mu = accumulator();
* // returns 3.0
*/
declare function incrnanmeanabs(): accumulator;


// EXPORTS //

export = incrnanmeanabs;
