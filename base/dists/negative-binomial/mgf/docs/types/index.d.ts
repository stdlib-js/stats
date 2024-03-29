/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Evaluates the moment-generating function (MGF) for a negative binomial distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a negative binomial distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a negative binomial distribution.
	*
	* ## Notes
	*
	* -   If provided a `r` which is not a positive number, the function returns `NaN`.
	* -   If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.
	*
	* @param t - input value
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.05, 20.0, 0.8 );
	* // returns ~267.839
	*
	* @example
	* var y = mgf( 0.1, 20.0, 0.1 );
	* // returns ~9.347
	*
	* @example
	* var y = mgf( 0.5, 10.0, 0.4 );
	* // returns ~42822.023
	*
	* @example
	* var y = mgf( 0.1, 0.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.1, -2.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( NaN, 20.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, 20.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 20, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 20, 1.5 );
	* // returns NaN
	*/
	( t: number, r: number, p: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a negative binomial distribution.
	*
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @returns MGF
	*
	* @example
	* var myMGF = mgf.factory( 4.3, 0.4 );
	* var y = myMGF( 0.2 );
	* // returns ~4.696
	*/
	factory( r: number, p: number ): Unary;
}

/**
* Negative binomial distribution moment-generating function (MGF).
*
* @param t - input value
* @param r - number of successes until experiment is stopped
* @param p - success probability
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.05, 20.0, 0.8 );
* // returns ~267.839
*
* y = mgf( 0.1, 20.0, 0.1 );
* // returns ~9.347
*
* y = mgf( 0.5, 10.0, 0.4 );
* // returns ~42822.023
*
* var myMGF = mgf.factory( 4.3, 0.4 );
* y = myMGF( 0.2 );
* // returns ~4.696
*
* y = myMGF( 0.4 );
* // returns ~30.83
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
