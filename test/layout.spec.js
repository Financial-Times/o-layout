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
	let layoutElement;

	beforeEach(() => {
		document.body.innerHTML = fixtures;
		layoutElement = document.querySelector('[data-o-component=o-layout]');
	});

	afterEach(() => {
		document.body.innerHTML = '';
	});

	describe('.init()', () => {

		it('stores `layoutElement` in a `layoutEl` property', () => {
			const layout = new Layout(layoutElement);
			assert.strictEqual(layout.layoutEl, layoutElement);
		});

		it('has default options and stores them in an `options` property', () => {
			const layout = new Layout(layoutElement);
			assert.isObject(layout.options);
			assert.deepEqual(layout.options, {
				constructNav: true,
				navHeadingSelector: 'h1, h2, h3',
				linkHeadings: true,
				linkedHeadingSelector: 'h1, h2, h3, h4, h5, h6'
			});
		});

		it('constructs the navigation by default', () => {
			const layout = new Layout(layoutElement);
			assert.strictEqual(layout.navHeadings.length, 2, 'Expected to find two navigation headings.');
		});

		it('constructs the navigation headings with a custom selector set by the "navHeadingSelector" option', (done) => {
			new Layout(layoutElement, { navHeadingSelector: 'h1' });
			// allow for request animation frame
			setTimeout(() => {
				assert.ok(document.querySelector('.o-layout__navigation'), 'Expected to find a navigation element.');
				done();
			}, 100);
		});

		it('does not construct navigation when "constructNav" is set to false', (done) => {
			new Layout(layoutElement, { constructNav: false });
			// allow for request animation frame
			setTimeout(() => {
				assert.notOk(document.querySelector('.o-layout__navigation'), null, 'Did not expect to find a navigation element.');
				done();
			}, 100);
		});

		it('constructs linkable headings by default', () => {
			const layout = new Layout(layoutElement);
			assert.strictEqual(layout.linkedHeadings.length, 2, 'Expected to find two linked heading.');
		});

		it('does not construct linkable headings when "linkHeadings" is set to false', () => {
			const layout = new Layout(layoutElement, { linkHeadings: false });
			assert.strictEqual(layout.linkedHeadings.length, 0, 'Expected to find no linked headings.');
		});

		it('constructs linkable headings with a custom selector set by the "linkedHeadingSelector" option', () => {
			const layout = new Layout(layoutElement, { linkedHeadingSelector: 'h1' });
			assert.strictEqual(layout.linkedHeadings.length, 1, 'Expected to find one "h1" linked heading.');
		});

		it('constructs the navigation independently of linked headings', () => {
			const layout = new Layout(layoutElement, { navHeadingSelector: 'h1', linkedHeadingSelector: 'h2' });
			assert.strictEqual(layout.linkedHeadings.length, 1, 'Expected to find only one "h2" linked heading.');
			assert.strictEqual(layout.navHeadings.length, 1, 'Expected to find only one "h1" nav heading.');
		});

		it('extracts options from the DOM', () => {
			const getDataAttributesSpie = sinon.stub(Layout, 'getDataAttributes');
			new Layout(layoutElement);
			assert.calledOnce(getDataAttributesSpie);
			Layout.getDataAttributes.restore();
		});
	});

	describe('.constructNavFromDOM()', () => {
		it('extracts headings from main content to construct sidebar navigation', (done) => {
			const layout = new Layout(layoutElement, { constructNav: false });
			const headingOneId = document.body.querySelector('h1').id;
			const headingTwoId = document.body.querySelector('h2').id;
			layout.constructNavFromDOM();
			// allow for request animation frame
			setTimeout(() => {
				const navItems = document.body.querySelectorAll('a');
				assert.strictEqual(navItems[0].hash, `#${headingOneId}`);
				assert.strictEqual(navItems[1].hash, `#${headingTwoId}`);
				done();
			}, 100);
		});
	});

	describe('.getDataAttributes', () => {
		let mockLayoutEl;
		let returnValue;

		beforeEach(() => {
			mockLayoutEl = document.createElement('div');
			mockLayoutEl.setAttribute('data-o-component', 'o-banner');
			mockLayoutEl.setAttribute('data-key', 'value');
			mockLayoutEl.setAttribute('data-another-key', 'value');
			mockLayoutEl.setAttribute('data-o-layout-foo', 'bar');
			mockLayoutEl.setAttribute('data-o-layout-json', '{"foo": "bar"}');
			mockLayoutEl.setAttribute('data-o-layout-json-single', '{\'foo\': \'bar\'}');
			returnValue = Layout.getDataAttributes(mockLayoutEl);
		});

		it('returns an object', () => {
			assert.isObject(returnValue);
		});

		it('extracts values from data attributes and returns them as object keys', () => {
			assert.strictEqual(returnValue.key, 'value');
		});

		it('converts the keys to camel-case', () => {
			assert.isUndefined(returnValue['another-key']);
			assert.strictEqual(returnValue.anotherKey, 'value');
		});

		it('ignores the `data-o-component` attribute', () => {
			assert.isUndefined(returnValue.oComponent);
		});

		it('strips "o-layout" from the key', () => {
			assert.isUndefined(returnValue.oLayoutFoo);
			assert.strictEqual(returnValue.foo, 'bar');
		});

		it('parses the key as JSON if it\'s valid', () => {
			assert.isObject(returnValue.json);
			assert.deepEqual(returnValue.json, {
				foo: 'bar'
			});
		});

		it('parses the key as JSON even if single quotes are used', () => {
			assert.isObject(returnValue.jsonSingle);
			assert.deepEqual(returnValue.jsonSingle, {
				foo: 'bar'
			});
		});
	});
});
