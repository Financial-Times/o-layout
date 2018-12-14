# Migration

## Migrating from v2 to v3
- The ability to [customise the `o-layout` CSS class name has been removed](https://github.com/Financial-Times/origami-proposals/issues/4). The `$class` parameter has been removed from SCSS mixins, and the `baseClass` property has been removed from the JS `options` object. Check your project does not use these parameters and update class names to `o-layout` if needed.
- `o-layout` no longer includes CSS and JS for `o-header-services` or `o-footer-services`. Include CSS and JS for `o-header-services` in your project, and `o-footer-services` if needed.
- Required font faces are now output by `o-layout`, so `o-fonts` may be removed as a direct dependancy.
- Previously `o-header-services` markup was modified by adding a `o-layout__header` class. But `o-header-services` markup is now placed, unaltered, within a wrapping `div`.
```diff
<div class="o-layout" data-o-component="o-layout" data-o-layout-construct-nav="false">
-	<header class="o-header-services o-layout__header" data-o-component="o-header">
+	<div class="o-layout__header">
+	    <header class="o-header-services" data-o-component="o-header">
		    <!-- more o-header-services markup -->
        </header>
+	</div>

	<!-- ... -->

</div>
```

## Migrating from v1 to v2

This major now uses `o-footer-services` v2. Though this does not change anything within `o-layout` directly, please make sure that your footer markup is changed according to the [`o-footer-services` migration guide](https://github.com/Financial-Times/o-footer-services#migration-guide).
