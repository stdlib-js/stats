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
* Computes the arithmetic mean of an array, ignoring `NaN` values and using Welford's algorithm.
*
* @param x - input array
* @returns arithmetic mean
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nanmeanwd( x );
* // returns ~0.3333
*/
declare function nanmeanwd( x: InputArray ): number;


// EXPORTS //

export = nanmeanwd;
