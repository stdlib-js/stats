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
	ci: Float32Array;

	/**
	* Value of the mean under the null hypothesis
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
* Interface describing `sztest2`.
*/
interface Routine {
	/**
	* Computes a two-sample Z-test for two single-precision floating-point strided arrays.
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
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Results = require( './../../../../base/ztest/two-sample/results/float32' );
	*
	* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	* var y = new Float32Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
	*
	* var results = new Results();
	* var out = sztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	<T extends BaseResults>( NX: number, NY: number, alternative: Alternative, alpha: number, diff: number, sigmax: number, x: Float32Array, strideX: number, sigmay: number, y: Float32Array, strideY: number, out: T ): Results;

	/**
	* Computes a two-sample Z-test for two single-precision floating-point strided arrays using alternative indexing semantics.
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
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Results = require( './../../../../base/ztest/two-sample/results/float32' );
	*
	* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	* var y = new Float32Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
	*
	* var results = new Results();
	* var out = sztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	ndarray<T extends BaseResults>( NX: number, NY: number, alternative: Alternative, alpha: number, diff: number, sigmax: number, x: Float32Array, strideX: number, offsetX: number, sigmay: number, y: Float32Array, strideY: number, offsetY: number, out: T ): Results;
}

/**
* Computes a two-sample Z-test for two single-precision floating-point strided arrays.
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
* var Float32Array = require( '@stdlib/array/float32' );
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float32' );
*
* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
* var y = new Float32Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
*
* var results = new Results();
* var out = sztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float32' );
*
* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
* var y = new Float32Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
*
* var results = new Results();
* var out = sztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/
declare var sztest2: Routine;


// EXPORTS //

export = sztest2;
