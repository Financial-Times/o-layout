# Migration

## Migrating from v2 to v3

- Your project must set its brand to the internal brand:
	- If using SASS, set the variable `$o-brand: 'internal';` before importing any Origami component.
	- If using the Origami Build Service, add the brand parameter to your CSS URL `?o-layout@^3.0.0&brand=internal`.

### Markup Changes

- `o-layout` now supports multiple layouts, so add the class `o-layout--docs` to maintain the documentation layout.
- Typography is now selectively applied with a class `o-layout-typography`, so also add that to your main content section.
- Replace the class `o-layout__main--full-span` with `o-layout__main__full-span` if used.

```diff
-<div class="o-layout" data-o-component="o-layout">
+<div class="o-layout o-layout--docs" data-o-component="o-layout">
   	 <div class="o-layout__header"></div>
-	 <div class="o-layout__main"></div>
+ 	 <div class="o-layout__main o-layout-typography"></div>
   	 <div class="o-layout__footer"></div>
 </div>
```

### Header And Footer Changes

- `o-layout` no longer includes CSS and JS for `o-header-services` and `o-footer-services` by default. Include CSS and JS for `o-header-services` and `o-footer-services` if they are used within your project.
- Previously `o-header-services` markup was modified by adding a `o-layout__header` class. But `o-header-services` markup is now placed, unaltered, within a wrapping `div`.

```diff
<div class="o-layout" data-o-component="o-layout" data-o-layout-construct-nav="false">
+	<div class="o-layout__header">
-	<header class="o-header-services o-layout__header" data-o-component="o-header">
+	    <header class="o-header-services" data-o-component="o-header">
		    <!-- more o-header-services markup -->
+       </header>
-	</header>
+	</div>

	<!-- ... -->

</div>
```

### Other Changes

- The ability to [customise the `o-layout` CSS class name has been removed](https://github.com/Financial-Times/origami-proposals/issues/4). The public `$o-layout-class` variable has been removed, the `$class` parameter has been removed from SCSS mixins, and the `baseClass` property has been removed from the JS `options` object. Check your project does not use these parameters and update class names to `o-layout` if needed.
- All variables and mixins except `oLayout` are now private. Instead of `oLayoutBreakPoint` use [o-grid's oGridRespondTo](https://registry.origami.ft.com/components/o-grid/sassdoc#o-grid-mixin-oGridRespondTo) instead. If your project depends on other `o-layout` mixins or variables, please contact the team.
- The main content area no longer uses CSS Grid to layout asides, make sure your project has no custom CSS which expects the grid.
- Required font faces are now output by `o-layout`, so `o-fonts` may be removed as a direct dependancy.

## Migrating from v1 to v2

This major now uses `o-footer-services` v2. Though this does not change anything within `o-layout` directly, please make sure that your footer markup is changed according to the [`o-footer-services` migration guide](https://github.com/Financial-Times/o-footer-services#migration-guide).
