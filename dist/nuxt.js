/*!
 * nuxt v2.10.1 (c) 2016-2019
 * - Sebastien Chopin (@Atinux)
 * - Alexandre Chopin (@alexchopin)
 * - Pooya Parsa (@pi0)
 * - Clark Du (@clarkdo)
 * - Jonas Galvez (@galvez)
 * - Alexander Lichter (@manniL)
 * - Dmitry Molotkov (@aldarund)
 * - Kevin Marrec (@kevinmarrec)
 * - Pim (@pimlie)
 * - All the amazing contributors
 * Released under the MIT License.
 * Website: https://nuxtjs.org
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('@nuxt/core');
const builder = require('@nuxt/builder');
const generator = require('@nuxt/generator');



Object.keys(core).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return core[k];
		}
	});
});
Object.keys(builder).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return builder[k];
		}
	});
});
Object.keys(generator).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return generator[k];
		}
	});
});
