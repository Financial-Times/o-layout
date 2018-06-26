# Origami asset loader [![Build Status](https://circleci.com/gh/Financial-Times/o-assets.png?style=shield&circle-token=fa399be931a86c55510a392198e48bbfeb3bab42)](https://circleci.com/gh/Financial-Times/o-assets)

This module provides Sass and JavaScript utilities for reliably building paths to a module's static assets, such as CSS background images, fonts and JSON data files. This is needed because the URL path to load these assets will vary markedly depending on how a product developer chooses to integrate the Origami component into their website.

- [Overview](#overview)
- [Usage](#usage)
	- [JavaScript](#javascript)
	- [Sass](#sass)
	- [URL routing](#url-routing)
	- [Using with the build service](#using-with-the-build-service)
- [Contact](#contact)
- [Licence](#licence)


## Overview

If a module called `o-header` contains a stylesheet that loads a logo as a background, and that image exists at `/img/logo.png` in the module's git repository, the path that needs to be output in the CSS could vary wildly:

1. `https://origami-build.ft.com/v2/files/o-header@1.2/img/logo.png` - If the product developer uses the build service to fetch the CSS, it needs to send the request for the logo back through the build service, and also needs to know what version of the module the CSS came from so it can serve the logo image from the same version.
1. `/bower_components/o-header/logo.png` - If the product developer has installed the Origami modules in a `bower_components` directory (which is typical) and that directory is at the root of their web server's public document tree, the default variable values will make the subresources Just Work&trade;
1. `/resources/head/logo.png` - If the product developer has a front-controller and can therefore internally map resource request URLs to different paths on the filesystem, and perhaps also wants to rename the module name component to something of their choosing, they might want the path to be something like this.

When loading from installed modules there is no need for a version number because the subresource file will be part of the same installed package from which the CSS or JavaScript is drawn.

## Usage

Where you need to resolve a path use the `resolve` methods, which take the path relative to the module root directory and module name as arguments:

### Sass

```sass
background: url(oAssetsResolve("img/symbols-sprite.png", o-weather));
```

### JavaScript

```js
xhr.open("get", require('o-assets').resolve('data/2013/12/monthdata.csv', 'o-weather'));
```

### URL routing

'URL routing' is used as a generic term for any method used to point a url to a resource, including copying the resource to the location specified by the url.

#### If you don't have URL routing

If your web server is serving files directly from disk with no routing layer, and therefore URL paths map directly to filesystem paths, then Origami assets should load correctly by default, provided that you:

* installed your Origami components using bower in the default `bower_components` directory; and
* your `bower_components` directory is *inside* and at the base of the public web server document root of your project.

#### If you do have URL routing

If you have URL routing and you want to improve on the above (because it's generally inadvisable to put bower_components in a public area of your web server), you can configure the assets module to load assets from a different path. The path to a given resource is composed by doing the following concatenation by default:

```sass
$o-assets-global-path + {module-name} + / + {path-within-repo}
```

By default the global path is `/bower_components/`, which anticipates that you will put your local bower components directory in the public web root of your web server.  However, as well as editing this, you can also set a custom path to any module, in whcih case the path for that module becomes:

```sass
{custom-path} + {path-within-repo}
```

Note that when you set a custom path for a module, the global path prefix is not used (but is still used for any modules for which you have not set a custom path).

Any custom configuration should be set before including any other modules in your product's sass/js bundles.

1. Global path prefix: `$o-assets-global-path` variable (in Sass) and `setGlobalPathPrefix` method (in JavaScript).  Default is '/bower_components/'.
1. Module path: This defaults to the name of the module and is set using methods that accept a map of module names and paths:

##### Sass

```sass
@include oAssetsSetModulePaths((
	o-header: /assets/header
));
```

##### JavaScript

```js
require('o-assets').setModulePaths({
	'o-header': '/assets/header'
});
```

### Using with the build service

If you don't want to make local static assets available publicly, but you want to benefit from including Origami module CSS and JS into your own build, you can use the build service for your local assets.  To do this, you will need to configure paths that *include the version of the module that you installed*, because otherwise the build service might give you assets from a different version of the module to the one you have.  This is a significant gotcha, especially if you have non-shrinkwrapped Origami dependencies.  Make sure your asset resource paths match the version you *actually installed*.

```js
require('o-assets').setModulePaths({
	'o-header': '//origami-build.ft.com/v2/files/o-header@1.2.3',
	'o-grid': '//origami-build.ft.com/v2/files/o-grid@2.3.4'
});
```

---

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/o-assets/issues), visit [#ft-origami](https://financialtimes.slack.com/messages/ft-origami/) or email [Origami Support](mailto:origami-support@ft.com).

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
