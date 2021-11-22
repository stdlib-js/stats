/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

'use strict';

var rank = {
	/*
	 * Standart ranking
	 *
	 * The MIT License, Copyright (c) 2014 Ben Magyar
	 */
	standard: function(array, key) {
		// sort the array
		array = array.sort(function(a, b) {
			var x = a[key];
			var y = b[key];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		// assign a naive ranking
		for (var i = 1; i < array.length + 1; i++) {
			array[i - 1]['rank'] = i;
		}
		return array;
	},
	/*
	 * Fractional ranking
	 *
	 * The MIT License, Copyright (c) 2014 Ben Magyar
	 */
	fractional: function(array, key) {
		array = this.standard(array, key);
		// now apply fractional
		var pos = 0;
		while (pos < array.length) {
			var sum = 0;
			var i = 0;
			for (i = 0; array[pos + i + 1] && (array[pos + i][key] === array[pos + i + 1][key]); i++) {
				sum += array[pos + i]['rank'];
			}
			sum += array[pos + i]['rank'];
			var endPos = pos + i + 1;
			for (pos; pos < endPos; pos++) {
				array[pos]['rank'] = sum / (i + 1);
			}
			pos = endPos;
		}
		return array;
	},
	rank: function(x, y) {
		var nx = x.length,
			ny = y.length,
			combined = [],
			ranked;
		while (nx--) {
			combined.push({
				set: 'x',
				val: x[nx]
			});
		}
		while (ny--) {
			combined.push({
				set: 'y',
				val: y[ny]
			});
		}
		ranked = this.fractional(combined, 'val');
		return ranked
	}
};


// MAIN //

/**
* Calculates the Mann-Whitney U test statistic for two samples.
*/
function testStatistic( x, y ) {
	var ranked = rank.rank(x, y),
	nr = ranked.length,
	nx = x.length,
	ny = y.length,
	ranksums = {
		x: 0,
		y: 0
	},
	i = 0, t = 0, nt = 1, tcf, ux, uy;

	while (i < nr) {
		if (i > 0) {
			if (ranked[i].val == ranked[i-1].val) {
				nt++;
			} else {
				if (nt > 1) {
					t += Math.pow(nt, 3) - nt
					nt = 1;
				}
			}
		}
		ranksums[ranked[i].set] += ranked[i].rank
		i++;
	}
	tcf = 1 - (t / (Math.pow(nr, 3) - nr))
	ux = nx*ny + (nx*(nx+1)/2) - ranksums.x;
	uy = nx*ny - ux;

	return {
		tcf: tcf,
		ux: ux,
		uy: uy,
		big: Math.max(ux, uy),
		small: Math.min(ux, uy)
	};
}


// EXPORTS //

module.exports = testStatistic;
