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

/// <reference types="@stdlib/types"/>

import { NumericArray, Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Alternative hypothesis.
*/
type Alternative = 'two-sided' | 'greater' | 'less';

/**
* Interface describing options when serializing a results object to a string.
*/
interface Options {
	/**
	* Number of digits to display after decimal points. Default: 4.
	*/
	digits?: number;

	/**
	* Boolean indicating whether to show the test decision. Default: true.
	*/
	decision?: boolean;
}

/**
* Serializes a results object as a string.
*
* @returns string representation
*/
type toString = ( options?: Options ) => string;

/**
* Serializes a results object as a JSON object.
*
* @returns JSON representation
*/
type toJSON = () => BaseResults;

/**
* Interface describing a "base" results object.
*/
interface BaseResults {
	/**
	* Boolean indicating whether the null hypothesis was rejected.
	*/
	rejected: boolean;

	/**
	* Alternative hypothesis.
	*/
	alternative: Alternative;

	/**
	* Significance level.
	*/
	alpha: number;

	/**
	* p-value.
	*/
	pValue: number;

	/**
	* Test statistic.
	*/
	statistic: number;

	/**
	* Confidence interval.
	*/
	ci: Float64Array;

	/**
	* Difference in means under the null hypothesis.
	*/
	nullValue: number;

	/**
	* Sample mean of `x`.
	*/
	xmean: number;

	/**
	* Sample mean of `y`.
	*/
	ymean: number;
}

/**
* Interface describing a results object.
*/
interface Results extends BaseResults {
	/**
	* Serializes results as formatted test output.
	*/
	toString: toString;

	/**
	* Serializes results as JSON.
	*/
	toJSON: toJSON;
}

/**
* Interface describing `ztest2`.
*/
interface Routine {
	/**
	* Computes a two-sample Z-test.
	*
	* @param NX - number of indexed elements in `x`
	* @param NY - number of indexed elements in `y`
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param diff - difference in means under the null hypothesis
	* @param sigmax - known standard deviation of `x`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param sigmay - known standard deviation of `y`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Results = require( './../../../../base/ztest/two-sample/results/float64' );
	*
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	* var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
	*
	* var results = new Results();
	* var out = ztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	<T extends BaseResults>( NX: number, NY: number, alternative: Alternative, alpha: number, diff: number, sigmax: number, x: InputArray, strideX: number, sigmay: number, y: InputArray, strideY: number, out: T ): Results;

	/**
	* Computes a two-sample Z-test using alternative indexing semantics.
	*
	* @param NX - number of indexed elements in `x`
	* @param NY - number of indexed elements in `y`
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param diff - difference in means under the null hypothesis
	* @param sigmax - known standard deviation of `x`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param sigmay - known standard deviation of `y`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Results = require( './../../../../base/ztest/two-sample/results/float64' );
	*
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	* var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
	*
	* var results = new Results();
	* var out = ztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	ndarray<T extends BaseResults>( NX: number, NY: number, alternative: Alternative, alpha: number, diff: number, sigmax: number, x: InputArray, strideX: number, offsetX: number, sigmay: number, y: InputArray, strideY: number, offsetY: number, out: T ): Results;
}

/**
* Computes a two-sample Z-test.
*
* @param NX - number of indexed elements in `x`
* @param NY - number of indexed elements in `y`
* @param alternative - alternative hypothesis
* @param alpha - significance level
* @param diff - difference in means under the null hypothesis
* @param sigmax - known standard deviation of `x`
* @param x - first input array
* @param strideX - stride length for `x`
* @param sigmay - known standard deviation of `y`
* @param y - second input array
* @param strideY - stride length for `y`
* @param out - output results object
* @returns results object
*
* @example
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
*
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
*
* var results = new Results();
* var out = ztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*
* @example
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
*
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
*
* var results = new Results();
* var out = ztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/
declare var ztest2: Routine;


// EXPORTS //

export = ztest2;
