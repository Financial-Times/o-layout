/* eslint-env mocha, sinon, proclaim */

import Layout from '../src/js/layout';
import fixtures from './helpers/fixtures';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('Layout', () => {
	let testArea;
	let layout;
	let stubs = {};

	beforeEach(() => {
		document.body.innerHTML += `<div id="test-area"></div>`
		testArea = document.getElementById('test-area');
	});

	afterEach(() => {
		testArea.innerHTML = '';
	})

	describe('.init()', () => {
		beforeEach(() => {
			testArea.innerHTML = fixtures.main;
			stubs.constructNavFromDOM = sinon.stub(Layout.prototype, 'constructNavFromDOM');
			stubs.highlightNavItems = sinon.stub(Layout.prototype, 'highlightNavItems');

			options = {};
			layoutElement = document.querySelector('[data-o-component=o-layout]');
			layout = new Layout(layoutElement);

			Layout.prototype.constructNavFromDOM.restore();
			Layout.prototype.highlightNavItems.restore();
		});

		it('stores `layoutElement` in a `layoutEl` property', () => {
			assert.strictEqual(layout.layoutEl, layoutElement);
		});

		it('has default options and stores them in an `options` property', () => {
			assert.isObject(layout.options);
			assert.notStrictEqual(layout.options, options);
			assert.deepEqual(layout.options, {
				constructNav: true,
				baseClass: 'o-layout'
			});
		});

		describe('.constructNavFromDOM()', () => {

		});
	});
});
