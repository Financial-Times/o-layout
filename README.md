o-layout [![Circle CI](https://circleci.com/gh/Financial-Times/o-layout/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/o-layout/tree/master) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](#licence)
=================

## Table of Contents

- [Overview](#overview)
- [Documentation Layout](#documentation-layout)
- [Landing Layout](#landing-layout)
- [Query Layout](#query-layout)
- [Sass](#sass)
- [JavaScript](#javascript)
	- [Custom Navigation](#custom-navigation)
- [Migration Guide](#migration-guide)
- [Contact](#contact)
- [Licence](#licence)


## Overview

`o-layout` provides page layouts and typography as a starting point to create internal tools or products. Layouts provided include:

- A documentation/blog page layout.
- A landing/homepage layout.
- A search/query page layout.

Typography is styled automatically using the `o-layout-typography` class. Including headings, paragraphs, lists, anchor tags, etc. To opt-out of typography styling for specific elements apply the `.o-layout__unstyled-element`.

In addition to typography styling, headings with `id`s are made linkable with a click, for sharing a direct link to that heading.

## Documentation Layout

The documentation layout is intended for text-heavy pages, for example technical documentation or blog posts. As well as a heading and footer, the documentation layout includes the following areas:

- Main Content
- Sidebar _(optional)_

```
┌————————————————————————————┐
|           HEADER           |
├————————————————————————————┤
| SIDE  |    MAIN CONTENT    |
| BAR   |                    |
|       |                    |
|       |                    |
├————————————————————————————┤
|           FOOTER           |
└————————————————————————————┘
```

```html
<div class="o-layout o-layout--docs" data-o-component="o-layout">
	<!-- Your header & navigation here. -->
	<div class="o-layout__header"></div>
	<!-- Your sidebar here (optional). -->
	<div class="o-layout__sidebar o-layout-typography"></div>
	<!-- Your page content here. -->
	<div class="o-layout__main o-layout-typography"></div>
	<!-- Your footer & navigation here. -->
	<footer class="o-layout__footer"></footer>
</div>
```

### Main Content

On large viewports the main content area (`o-layout__main`) is split into two columns.

```
┌————————————————————————————┐
|                            |
├————————————————————————————┤
|       |   col 1    | col 2 |
|       |            |       |
|       |            |       |
|       |            |       |
├————————————————————————————┤
|                            |
└————————————————————————————┘
```

By default content is placed into column 1; except for the `aside` element which is placed in column 2; and the `table` element which spans both columns.

Add the class `o-layout__main__single-span` to force elements into column 1. Use `o-layout__main__full-span` to force elements to span both columns.


```html
<!-- Your page content here. -->
<div class="o-layout__main o-layout-typography">
	<!-- Most content is placed in column 1 -->
	<h2>A Title</h2>
	<p>Some content.</p>
	<!-- Asides are placed in column 2 -->
	<aside>An aside</aside>
	<!-- Tables span columns 1 & 2 -->
	<table></table>
	<!-- The class "o-layout__main__single-span" forces elements into column 1 only -->
	<table class="o-layout__main__single-span"></table>
	<!-- The class "o-layout__main__full-span" forces elements to span columns 1 & 2 -->
	<div class="o-layout__main__full-span"></div>
</div>
```

### Sidebar
For the documentation layout, `o-layout` will generate a sidebar navigation. The default sidebar links to any `<h2>` or `<h3>` element within the main content area, providing it has an `id`. If this is a feature you want to use, then you don't need to add anything to the sidebar section of `o-layout`.

If you wish to display headings other than `<h2>` and `<h3>` in the navigation, you can customise the selector that's used with the `data-o-layout-nav-heading-selector` data attribute. For example, to select only headings which have the class `nav-heading`, use the following:

```diff
+ <div class="o-layout" data-o-component="o-layout" data-o-layout-nav-heading-selector=".nav-heading">
- <div class="o-layout" data-o-component="o-layout">
```

To customise your sidebar navigation more fully, add the data attribute `data-o-layout-construct-nav="false"` to the root `o-layout` element. Then add your own `nav` element within the sidebar, with a child list which has the class `o-layout__navigation`.

Altogether, a customised navigation should look like this:
```diff
+<div class="o-layout" data-o-component="o-layout" data-o-layout-construct-nav="false">
	<div class="o-layout__header">
		<!-- o-header-services markup goes here -->
	</div>

	<div class="o-layout__sidebar">
		<!-- this can be an <ol> or a <ul> -->
+		<nav>
+			<ol class="o-layout__navigation">
+				<li>
+					<a href="#this-is-a-title">This is a title</a>
+				</li>
+			</ol>
+		</nav>
	</div>

	<div class="o-layout__main">
		<h2 id="this-is-a-title">This Is A Title</h2>
	</div>

	<footer class="o-layout__footer"></footer>
</div>
```

Alternatively you can customise the navigation [via JavaScript](#custom-navigation).

## Landing Layout

The landing layout is ideal for a homepage or other key category / directory pages. As well as the header and footer, the landing layout provides two areas:

- Hero (optional)
- Main Content

```
┌————————————————————————————┐
|           HEADER           |
├————————————————————————————┤
|            HERO            |
├————————————————————————————┤
|         MAIN CONTENT       |
├————————————————————————————┤
|           FOOTER           |
└————————————————————————————┘
```

```html
<div class="o-layout o-layout--landing" data-o-component="o-layout">
	<!-- Your header & navigation here. -->
	<div class="o-layout__header"></div>
	<!-- Your hero content here (optional). -->
	<div class="o-layout__hero o-layout-typography"></div>
	<!-- Your landing page content here. -->
	<div class="o-layout__main o-layout-typography"></div>
	<!-- Your footer & navigation here. -->
	<footer class="o-layout__footer"></footer>
</div>
```

Within the main content area the landing layout provides an overview section. The overview section is ideal for outlining key points of the landing page.

Any number of items are allowed within an overview section, but will wrap onto a new row if there are more than 4.

Overview with 3 items:
```
├———————————————————————————————————————┤
|  content  |   content   |   content   |
├———————————————————————————————————————┤
```

```html
	<!-- Your landing page content here. -->
	<div class="o-layout__main o-layout-typography">
		<!-- Overview -->
        <div class="o-layout__overview">
            <div class="o-layout-item">
                <h2>Great For This</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="o-layout-item">
                <h2>Good For That</h2>
                <p>Blanditiis, dolor. Autem recusandae vero ut labore?</p>
            </div>
            <div class="o-layout-item">
                <h2>And More</h2>
                <p>Corrupti nemo voluptate aperiam explicabo vitae cupiditate atque fugiat dignissimos.</p>
            </div>
        </div>
	</div>
```

There is also an actions overview. These support a footer, which is useful for highlighting calls to action with links or buttons.

Actions overview with 4 items with footer:
```
├———————————————————————————————————————┤
| content | content | content | content |
| content |         | content | content |
| content |         | content |         |
├———————————————————————————————————————┤
| footer  | footer  | footer  | footer  |
├———————————————————————————————————————┤
```

```html
	<!-- Your landing page content here. -->
	<div class="o-layout__main o-layout-typography">
		<!-- Actions Overview -->
		<div class="o-layout__overview o-layout__overview--actions">
			<div class="o-layout-item">
				<div class="o-layout-item__content">
					<h3>Here's A Thing</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div class="o-layout-item__footer">
					<a href="#">Take An Action</a>
				</div>
			</div>
			<div class="o-layout-item">
				<div class="o-layout-item__content">
					<h2>And Another</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, numquam!</p>
				</div>
				<div class="o-layout-item__footer">
					<a href="#">Do A Thing</a>
				</div>
			</div>
			<div class="o-layout-item">
				<div class="o-layout-item__content">
					<h2>And More Choices</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptatibus?</p>
				</div>
				<div class="o-layout-item__footer">
					<a href="#">Do A Different Thing</a>
				</div>
			</div>
			<div class="o-layout-item">
				<div class="o-layout-item__content">
					<h2>What To Do</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptatibus?</p>
				</div>
				<div class="o-layout-item__footer">
					<a href="#">Learn More</a>
				</div>
			</div>
		</div>
	</div>
```

[See the registry demos](https://registry.origami.ft.com/components/o-layout#demo-landing-layout) for an example landing page.

## Query Layout

The query layout is intended for search, filter, and result pages. As well as the header and footer, the query layout provides four areas:

- Heading
- Query Sidebar
- Main Content
- Aside Sidebar _(optional)_

```html
<div class="o-layout o-layout--query" data-o-component="o-layout">
	<!-- Your header & navigation here. -->
    <div class="o-layout__header"></div>
	<!-- Your title / heading content here. -->
    <div class="o-layout__heading o-layout-typography"></div>
	<!-- Your search or filter inputs. -->
    <div class="o-layout__query-sidebar o-layout-typography"></div>
	<!-- Your search results or other main content. -->
	<div class="o-layout__main o-layout-typography"></div>
	<!-- Your asides / additional information (optional). -->
    <div class="o-layout__aside-sidebar o-layout-typography"></div>
	<!-- Your footer & navigation here. -->
    <div class="o-layout__footer"></div>
</div>
```

### Large Viewports
```
┌————————————————————————————┐
|           HEADER           |
├————————————————————————————┤
|       |  HEADING   |       |
|       ├————————————┤       |
| QUERY |  MAIN      | ASIDE |
| SIDE  |  CONTENT   | SIDE  |
| BAR   |            | BAR   |
|       |            |       |
├————————————————————————————┤
|           FOOTER           |
└————————————————————————————┘
```

### Medium Viewports
```
┌————————————————————┐
|       HEADER       |
├————————————————————┤
|       |  HEADING   |
|       ├————————————┤
|       |            |
| QUERY |  MAIN      |
| SIDE  |  CONTENT   |
| BAR   |            |
|       ├————————————┤
|       | ASIDE SIDE |
|       | BAR        |
├————————————————————┤
|       FOOTER       |
└————————————————————┘
```

### Small Viewports
```
┌————————————————————┐
|       HEADER       |
├————————————————————┤
| HEADING            |
├————————————————————┤
| QUERY SIDE BAR     |
├————————————————————┤
| MAIN CONTENT       |
├————————————————————┤
| ASIDE SIDE BAR     |
├————————————————————┤
|       FOOTER       |
└————————————————————┘
```

## Sass
As with all Origami components, o-layout has a [silent mode](http://origami.ft.com/docs/syntax/scss/#silent-styles). You can include o-layout styles with the `oLayout` mixin.

As `o-layout` only supports the internal brand, your project must also set its brand to internal `$o-brand: 'internal';`.

```sass
$o-brand: 'internal';
@import 'o-layout/main';

@include oLayout();
```

If your project does not use all layouts or other features provided by `o-layout`, include them selectively with an `$opts` argument.

**Layout Options**
- documentation
- landing
- query

**Feature Options**
- linked-headings (enables clickable / highlighted anchors on the page)
- typography (enables body typography applied with the class `o-layout-typography`)

```sass
@mixin oLayout($opts: (
	'layouts': ('documentation', 'landing', 'query'),
	'features': ('linked-headings', 'typography')
));
```

The landing layout supports an extra option, which sets a background image on the hero area:

```sass
@mixin oLayout($opts: (
	'layouts': ('documentation', 'landing', 'query'),
	'features': ('linked-headings', 'typography'),
	'hero-image': 'https://example.com/image.png',
));
```

## JavaScript

No code will run automatically unless you are using the Build Service. You must either construct an `o-layout` object manually or fire an o.DOMContentLoaded event, which `o-layout` listens for.

Use the following to initialise your layout manually:
```js
const oLayout = require('o-layout');
oLayout.init();
```

### Custom Navigation

The [documentation layout](#documentation-layout) uses JavaScript to construct the sidebar navigation out of headings (`h1`, `h2` and `h3`) in the content, and to highlight those items depending on the scroll position. This is its default behaviour.

If you would like to specify a custom selector for the navigation generation, set the `navHeadingSelector` option:

```js
const oLayout = require('o-layout');
oLayout.init(null, { navHeadingSelector: '.nav-heading' });
```

If you would like to define your own navigation, you will need to initialise `o-layout` with the `constructNav` option set to `false`:

```js
const oLayout = require('o-layout');
oLayout.init(null, { constructNav: false });
```

### Linking Headings

Heading elements such as `h1`, `h2`, etc that have an `id` attribute are made linkable by default. The heading can then be clicked to update the URL with a hash, for sharing a direct link to that heading.

To customise which headings can be clicked and linked to directly, set the `linkedHeadingSelector` option:

```js
const oLayout = require('o-layout');
oLayout.init(null, { linkedHeadingSelector: '.link-heading' });
```

Turn off linkable headings by setting `linkHeadings` to false:

```js
const oLayout = require('o-layout');
oLayout.init(null, { linkHeadings: true });
```

## Migration Guide

State | Major Version | Last Minor Release | Migration guide |
:---: | :---: | :---: | :---:
✨ active | 3 | N/A | [migrate to v3](MIGRATION.md#migrating-from-v2-to-v3) |
⚠ maintained | 2 | 2.2.4 | [migrate to v2](MIGRATION.md#migrating-from-v1-to-v2) |
╳ deprecated | 1 | 1.3.4 | N/A |


## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/o-component-boilerplate/issues), visit [#ft-origami](https://financialtimes.slack.com/messages/ft-origami/) or email [Origami Support](mailto:origami-support@ft.com).


## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
