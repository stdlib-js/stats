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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var arcsine = require( './../../base/dists/arcsine/cdf' );
var beta = require( './../../base/dists/beta/cdf' );
var betaprime = require( './../../base/dists/betaprime/cdf' );
var cauchy = require( './../../base/dists/cauchy/cdf' );
var chi = require( './../../base/dists/chi/cdf' );
var chisquare = require( './../../base/dists/chisquare/cdf' );
var cosine = require( './../../base/dists/cosine/cdf' );
var erlang = require( './../../base/dists/erlang/cdf' );
var exponential = require( './../../base/dists/exponential/cdf' );
var f = require( './../../base/dists/f/cdf' );
var frechet = require( './../../base/dists/frechet/cdf' );
var gamma = require( './../../base/dists/gamma/cdf' );
var gumbel = require( './../../base/dists/gumbel/cdf' );
var invgamma = require( './../../base/dists/invgamma/cdf' );
var kumaraswamy = require( './../../base/dists/kumaraswamy/cdf' );
var laplace = require( './../../base/dists/laplace/cdf' );
var levy = require( './../../base/dists/levy/cdf' );
var logistic = require( './../../base/dists/logistic/cdf' );
var lognormal = require( './../../base/dists/lognormal/cdf' );
var normal = require( './../../base/dists/normal/cdf' );
var pareto1 = require( './../../base/dists/pareto-type1/cdf' );
var rayleigh = require( './../../base/dists/rayleigh/cdf' );
var t = require( './../../base/dists/t/cdf' );
var triangular = require( './../../base/dists/triangular/cdf' );
var uniform = require( './../../base/dists/uniform/cdf' );
var weibull = require( './../../base/dists/weibull/cdf' );


// MAIN //

var CDF = {};

CDF[ 'arcsine' ] = arcsine;
CDF[ 'beta' ] = beta;
CDF[ 'betaprime' ] = betaprime;
CDF[ 'cauchy' ] = cauchy;
CDF[ 'chi' ] = chi;
CDF[ 'chisquare' ] = chisquare;
CDF[ 'cosine' ] = cosine;
CDF[ 'erlang' ] = erlang;
CDF[ 'exponential' ] = exponential;
CDF[ 'f' ] = f;
CDF[ 'frechet' ] = frechet;
CDF[ 'gamma' ] = gamma;
CDF[ 'gumbel' ] = gumbel;
CDF[ 'invgamma' ] = invgamma;
CDF[ 'kumaraswamy' ] = kumaraswamy;
CDF[ 'laplace' ] = laplace;
CDF[ 'levy' ] = levy;
CDF[ 'logistic' ] = logistic;
CDF[ 'lognormal' ] = lognormal;
CDF[ 'normal' ] = normal;
CDF[ 'pareto-type1' ] = pareto1;
CDF[ 'rayleigh' ] = rayleigh;
CDF[ 't' ] = t;
CDF[ 'triangular' ] = triangular;
CDF[ 'uniform' ] = uniform;
CDF[ 'weibull' ] = weibull;


// EXPORTS //

module.exports = CDF;
