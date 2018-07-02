o-layout [![Circle CI](https://circleci.com/gh/Financial-Times/o-layout/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/o-layout/tree/master)
=================

This component provides a responsive full page layout for internal documentation and tooling.
It provides:
- consistent design (typography, colors),
- ease of set up (header, footer, sidebar, navigation)


## Table of Contents

- [Usage](#usage)
	- [Markup](#markup)
		- [Layout Base](#layout-base)
		- [Navigation and Content](#navigation-and-content)
		- [Asides](#asides)
		- [Tables](#tables)
	- [Sass](#sass)
- [Contact](#contact)
- [Licence](#licence)


## Usage
`o-layout` is pure HTML and CSS, and relies on all of the sections within the markup to lay the page out correctly.

In essence, the `o-layout` provides a grid that looks like this:
```
┌————————————————————————————┐
|           HEADER           |
├————————————————————————————┤
|        |                   |
|  SIDE  |    MAIN           |
|  BAR   |    CONTENT        |
|        |                   |
├————————————————————————————┤
|           FOOTER           |
└————————————————————————————┘
```

### Markup

`o-layout` uses CSS Grid Layout, and more specifically [grid template areas](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas).   
All grid areas must be present in the markup in order to get the full layout.  

#### Layout Base
The markup below ↓ will generate the ascii grid above ↑.  
The `sidebar` and `main` content areas accept any element, and will automatically style typography, headings, asides, paragraphs, lists and links.

```html
<div class="o-layout">
	<header class="o-layout__area--header">
		<!-- o-header-services markup goes here -->
	</header>

	<div class="o-layout__area--sidebar">
		<!-- content for the sidebar goes here -->
	</div>

	<div class="o-layout__area--main">
		<!-- Any and all content goes here -->
	</div>

	<footer class="o-layout__area--footer">
		<!-- o-footer-services markup goes here -->
	</footer>
</div>
```

#### Navigation and Content
`o-layout` also provides a navigation area for the sidebar, and the option to split the main content area, for use with tables, or asides.

In order to add a navigation to the side-bar, wrap a list with the navigation items like this:
```html
<div class="o-layout">
	<header class="o-layout__area--header">
		<!-- o-header-services markup goes here -->
	</header>

	<div class="o-layout__area--sidebar">
		<!-- this can be an <ol> or a <ul> -->
		<ol class="o-layout__navigation">
			<li>Nav Item 1</li>
			<li>Nav Item 2</li>
		</ol>
	</div>

	<div class="o-layout__area--main">
		<!-- Any and all content goes here -->
	</div>

	<footer class="o-layout__area--footer">
		<!-- o-footer-services markup goes here -->
	</footer>
</div>
```

#### Asides

`o-layout` can make content asides literal asides to the content, if you have control over the class names and elements in your HTML.
If you do, you will need to wrap that content and its aside in another element:

```html
<div class="o-layout">
	<header class="o-layout__area--header">
		<!-- o-header-services markup goes here -->
	</header>

	<div class="o-layout__area--sidebar">
		<!-- this can be an <ol> or a <ul> -->
		<ol class="o-layout__navigation">
			<li>Nav Item 1</li>
			<li>Nav Item 2</li>
		</ol>
	</div>

	<div class="o-layout__area--main">
		<h1> This is a title</h1>
		<p> This is some content. </p>
		<div class="o-layout__aside">
			<div>
				<p> This is more content</p>
				<p> This is even more content</p>
			</div>
			<aside>
				<p> This is an aside to the previous content.</p>
			</aside>
		</div>
	</div>

	<footer class="o-layout__area--footer">
		<!-- o-footer-services markup goes here -->
	</footer>
</div>
```

Otherwise, if your markup is generated by a static site generator and you have limited control over giving your elements class names, `o-layout` will stack all content into the main column:
```html
<div class="o-layout">
	<header class="o-layout__area--header">
		<!-- o-header-services markup goes here -->
	</header>

	<div class="o-layout__area--sidebar">
		<!-- this can be an <ol> or a <ul> -->
		<ol class="o-layout__navigation">
			<li>Nav Item 1</li>
			<li>Nav Item 2</li>
		</ol>
	</div>

	<div class="o-layout__area--main">
		<h1> This is a title</h1>
		<p> This is some content. </p>
		<p> This is more content</p>
		<p> This is even more content</p>
		<aside>
			<p> This is an aside to the previous content.</p>
		</aside>
	</div>

	<footer class="o-layout__area--footer">
		<!-- o-footer-services markup goes here -->
	</footer>
</div>
```
#### Tables
If you have a table in your layout, there is the option to give it more space within the grid by adding a class to the table, like this:

```html
<div class="o-layout">
	<header class="o-layout__area--header">
		<!-- o-header-services markup goes here -->
	</header>

	<div class="o-layout__area--sidebar">
		<!-- this can be an <ol> or a <ul> -->
		<ol class="o-layout__navigation">
			<li>Nav Item 1</li>
			<li>Nav Item 2</li>
		</ol>
	</div>

	<div class="o-layout__area--main">
		<h1> This is a title</h1>
		<table class="o-layout__table">
			<thead></thead>
			<tbody>
				<!-- ... -->
			</tbody>
		</table>
	</div>

	<footer class="o-layout__area--footer">
		<!-- o-footer-services markup goes here -->
	</footer>
</div>
```


### Sass
As with all Origami components, o-layout has a [silent mode](http://origami.ft.com/docs/syntax/scss/#silent-styles). To use its compiled CSS (rather than using its mixins with your own Sass) set `$o-layout-is-silent: false;` in your Sass before you import the o-layout Sass.

Otherwise, you can initialise the styling for o-layout with your own classnames, like this:
```sass
import 'o-layout/main';

@include oLayout($class: my-layout);
```

---

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/o-component-boilerplate/issues), visit [#ft-origami](https://financialtimes.slack.com/messages/ft-origami/) or email [Origami Support](mailto:origami-support@ft.com).

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
