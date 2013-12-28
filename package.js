Package.describe({
  summary: "jQuery-resize - support for resize on ALL elements"
});

Package.on_use(function (api, where) {
  api.add_files([
        'jquery.ba-resize.js'
  ], 'client');
});
