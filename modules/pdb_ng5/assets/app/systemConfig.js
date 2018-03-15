/**
 * @file
 * This builds our system config and imports our main app file.
 */

(function (drupalSettings) {
  'use strict';

  // Source: http://gomakethings.com/vanilla-javascript-version-of-jquery-extend
  // Pass in the objects to merge as arguments.
  // For a deep extend, set the first argument to `true`.
  function extend() {
    // Variables.
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge.
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object.
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties.
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          }
          else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge.
    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  }

  var modulePath = drupalSettings.path.baseUrl + drupalSettings.pdb.ng2.module_path;

  // Set default extension to .ts or .js.
  var ext = 'ts';
  if (drupalSettings.pdb.ng2.development_mode === 0) {
    ext = 'js';
  }

  var paths = {
    'app': modulePath + '/assets/app',
    'classes/*': modulePath + '/assets/classes/*',
    '@angular/*': modulePath + '/node_modules/@angular/*',
    
    'components/*': modulePath + '/components/*/index',
    'components/*/globals': modulePath + '/components/*/globals',
    'rxjs/*': modulePath + '/node_modules/rxjs/*.js',
    'helpers/*': modulePath + '/assets/helpers/*/index'
  };

  var map = {
  }

  var packages = {
    /*
    'rxjs/Observable': {
      main: 'Observable',
      defaultExtension: 'js'
    },
    'rxjs/Subject': {
      main: 'Subject',
      defaultExtension: 'js'
    },
    'rxjs/observable/merge': {
      main: 'observable/merge',
      defaultExtension: 'js'
    },
    'rxjs/operator/share': {
      main: 'operator/share',
      defaultExtension: 'js'
    },
    'rxjs/*':{
      main: 'Rx',
      defaultExtension: 'js'
    },*/
    app: {
      main: 'app-aot',
      defaultExtension: ext
    },
    '/': {
      defaultExtension: ext
    },
  };
  
  var map = {

  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic'
  ];

  // Add package entries for angular packages.
  ngPackageNames.forEach(function (pkgName) {
    // Bundled version (fewer requests).
    packages['@angular/' + pkgName] = {
      main: 'bundles/' + pkgName + '.umd',
      defaultExtension: 'js'
    };
  });

  // Our components may make additions via their YAML files, add them.
  if ('system_config' in drupalSettings.pdb.ng2) {
    if ('packages' in drupalSettings.pdb.ng2.system_config) {
      packages = extend(true, packages, drupalSettings.pdb.ng2.system_config.packages);
    }
    if ('paths' in drupalSettings.pdb.ng2.system_config) {
      for (var prop in drupalSettings.pdb.ng2.system_config.paths) {
        paths[prop] = modulePath + drupalSettings.pdb.ng2.system_config.paths[prop];
      }
    }

  }

  var config = {
    // Use typescript for compilation.
    transpiler: 'typescript',
    // Packages defines our app package.
    packages: packages,
    map: map,
    paths: paths
  };

  if ('SystemJS' in drupalSettings) {
    config = extend(true, config, drupalSettings.SystemJS);
  }

  System.config(config);
  System.import('app').catch(console.error.bind(console));

})(drupalSettings);
