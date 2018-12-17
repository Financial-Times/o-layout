# Migration

## Migrating from v2 to v3
- The ability to [customise the `o-layout` CSS class name has been removed](https://github.com/Financial-Times/origami-proposals/issues/4). The `$class` parameter has been removed from SCSS mixins, and the `baseClass` property has been removed from the JS `options` object. Check your project does not use these parameters and update class names to `o-layout` if needed.

## Migrating from v1 to v2

This major now uses `o-footer-services` v2. Though this does not change anything within `o-layout` directly, please make sure that your footer markup is changed according to the [`o-footer-services` migration guide](https://github.com/Financial-Times/o-footer-services#migration-guide).
