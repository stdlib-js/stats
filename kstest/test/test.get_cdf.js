/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

// MODULES //

var tape = require( 'tape' );
var arcsineCDF = require( './../../base/dists/arcsine/cdf' );
var betaCDF = require( './../../base/dists/beta/cdf' );
var betaprimeCDF = require( './../../base/dists/betaprime/cdf' );
var cauchyCDF = require( './../../base/dists/cauchy/cdf' );
var chiCDF = require( './../../base/dists/chi/cdf' );
var chisquareCDF = require( './../../base/dists/chisquare/cdf' );
var cosineCDF = require( './../../base/dists/cosine/cdf' );
var erlangCDF = require( './../../base/dists/erlang/cdf' );
var exponentialCDF = require( './../../base/dists/exponential/cdf' );
var fCDF = require( './../../base/dists/f/cdf' );
var frechetCDF = require( './../../base/dists/frechet/cdf' );
var gammaCDF = require( './../../base/dists/gamma/cdf' );
var gumbelCDF = require( './../../base/dists/gumbel/cdf' );
var invgammaCDF = require( './../../base/dists/invgamma/cdf' );
var kumaraswamyCDF = require( './../../base/dists/kumaraswamy/cdf' );
var laplaceCDF = require( './../../base/dists/laplace/cdf' );
var logisticCDF = require( './../../base/dists/logistic/cdf' );
var lognormalCDF = require( './../../base/dists/lognormal/cdf' );
var rayleighCDF = require( './../../base/dists/rayleigh/cdf' );
var tCDF = require( './../../base/dists/t/cdf' );
var uniformCDF = require( './../../base/dists/uniform/cdf' );
var normalCDF = require( './../../base/dists/normal/cdf' );
var paretoCDF = require( './../../base/dists/pareto-type1/cdf' );
var triangularCDF = require( './../../base/dists/triangular/cdf' );
var weibullCDF = require( './../../base/dists/weibull/cdf' );
var getCDF = require( './../lib/get_cdf.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getCDF, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the correct CDF if provided a valid input string', function test( t ) {
	t.equal( getCDF( 'arcsine' ), arcsineCDF );
	t.equal( getCDF( 'beta' ), betaCDF );
	t.equal( getCDF( 'betaprime' ), betaprimeCDF );
	t.equal( getCDF( 'cauchy' ), cauchyCDF );
	t.equal( getCDF( 'chi' ), chiCDF );
	t.equal( getCDF( 'chisquare' ), chisquareCDF );
	t.equal( getCDF( 'cosine' ), cosineCDF );
	t.equal( getCDF( 'erlang' ), erlangCDF );
	t.equal( getCDF( 'exponential' ), exponentialCDF );
	t.equal( getCDF( 'f' ), fCDF );
	t.equal( getCDF( 'frechet' ), frechetCDF );
	t.equal( getCDF( 'gamma' ), gammaCDF );
	t.equal( getCDF( 'gumbel' ), gumbelCDF );
	t.equal( getCDF( 'invgamma' ), invgammaCDF );
	t.equal( getCDF( 'kumaraswamy' ), kumaraswamyCDF );
	t.equal( getCDF( 'laplace' ), laplaceCDF );
	t.equal( getCDF( 'logistic' ), logisticCDF );
	t.equal( getCDF( 'lognormal' ), lognormalCDF );
	t.equal( getCDF( 'normal' ), normalCDF );
	t.equal( getCDF( 'pareto-type1' ), paretoCDF );
	t.equal( getCDF( 'rayleigh' ), rayleighCDF );
	t.equal( getCDF( 't' ), tCDF );
	t.equal( getCDF( 'triangular' ), triangularCDF );
	t.equal( getCDF( 'uniform' ), uniformCDF );
	t.equal( getCDF( 'weibull' ), weibullCDF );
	t.end();
});

tape( 'the function throws an error if provided the name of a discrete distribution', function test( t ) {
	var values;
	var i;

	values = [
		'binomial',
		'geometric',
		'hypergeometric',
		'negative-binomial',
		'poisson'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			getCDF( value );
		};
	}
});

tape( 'the function throws an error if provided a name which does not match any distribution', function test( t ) {
	var values;
	var i;

	values = [
		'not_a_distribution',
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			getCDF( value );
		};
	}
});
