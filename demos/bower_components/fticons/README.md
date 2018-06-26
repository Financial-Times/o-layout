[![Build status](https://img.shields.io/circleci/project/Financial-Times/fticons.svg)](https://circleci.com/gh/Financial-Times/fticons)

# Icon set for FT
This is the (new) icon set for FT websites. It replaces the assets in [o-icons](http://github.com/financial-times/o-icons).

The icons have been designed to work best at 40px width and height. At this size they align precisely with the pixel grid and do not appear blurry on screens with a DPR of 1 (non-retina screens).

## Index
- [Usage](#usage)
- [Creating or adding icons](#creating-or-modifying-new-icons)
- [SVG icons GOTCHAs](#svg-icons-GOTCHAs)
- [Migrating from o-icons assets](#migrating-from-o-icons-assets)
- [What happened to o-icons](#what-happened-to-o-icons)

## Usage
You can use fticons in the following ways:

1. You can access them directly from the Image Service, eg [https://www.ft.com/__origami/service/image/v2/images/raw/fticon-v1:podcast?source=test](https://www.ft.com/__origami/service/image/v2/images/raw/fticon-v1:podcast?source=test)
1. There is also an Origami component that wraps this icon set: [o-icons](https://github.com/financial-times/o-icons). As with all Origami components, you can use o-icons with the Build Service, or as an installable component. See the [o-icons README](https://github.com/financial-times/o-icons) for more information.

## Creating or modifying new icons

Please check out our [contributing guide](https://github.com/Financial-Times/fticons/blob/master/contributing.md) for design and development guidelines for adding or modifying icons.

## SVG icons GOTCHAs

### My icons are blurry!

All of our icons are vectors. At small sizes, the process of converting a vector to a bitmap (rasterization) will leave you with with blurry icons. All of the icons in fticons have been drawn to map precisely to a 40x40px grid. If you need to use these at a smaller or larger size, they may appear fuzzy as the browser tries to anti-alias them.

### I'm exporting my icons at 40px and they should work but they're still fuzzy!

Sometimes sketch will export icons with rounding errors, so if you think you're exporting them on the correct grid and they're still blurry, open the source and look if the path points are values like 372.00000001. The fix for this is to either:
- not use sketch
- hand edit your SVGs to remove these errors

### When I convert my icons to PNG, they're blurry!

This will happen if the source SVG is smaller than the size you're converting to. This is because the Image Service converts the format first and then resizes, resulting in blurriness.
The solution is to make sure your source SVGs have a width and height bigger than the size they're likely to be used at.

### My icon is not converting to a PNG properly

If your icon has a clipPath in it, then with v1 of the Image Service, it may not render properly. Usuallt it will look like the clipPath isn't there. To fix this you'll need to redraw your icon without the clipPath.


## Migrating from o-icons assets
If you were using the old o-icons assets, some things have changed in this new set.

The whitespace around icons has now been standardised. This means that some of the padding may have changed, so if your code inserts and icon to line up with some other stuff, you should check that still works, you may need to adjust it.

### Removed
The following icons no longer exist:
- `arrow-downwards` (use `arrow-down`)
- `arrow-upwards` (use `arrow-up`)
- `comment` (use `speech`)
- `cross-disk` (use `cross`)
- `pinterest` (social icons are used differently, please use the ones in bitbucket: http://git.svc.ft.com/projects/DATA/repos/social-images/browse)
- `section-business-life`
- `section-magazine`
- `single-quote-patterned` (use `speech-left`)
- `single-quote` (use `speech-left`)
- `thumb-up` (please let us know if you need this back)
- `tick-thin` (use tick)

### Renamed
- `arrow-up-down` to `arrows-up-down`
- `bell` to `notification`
- `copy-link` to `link`
- `email` to `mail`
- `ipad-portrait` to `ipad`
- `padlock` to `lock`
- `printer` to `print`
- `pullquote` to `speech-left`
- `speechbubble` to `speech`

## What happened to o-icons

[o-icons](https://github.com/Financial-Times/o-icons) still exists, and provides Sass mixins to use icons with. In order to properly version the icon set we've moved it to it's own repo (this one). This means we can do major releases of o-icons Sass without needing to bump the icon set (which can be accessed independently of o-icons via the [Image Service](https://www.ft.com/__origami/service/image/v2/).)

----

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/fticons/issues), visit [#ft-origami](https://financialtimes.slack.com/messages/ft-origami/) or email [Origami Support](mailto:origami-support@ft.com).

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
