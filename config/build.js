requirejs.config({
  wrap: true,
  insertRequire: ['demo-mangler'],
  deps: ['demo-mangler'],
  shim: {
  },
  paths: {
    'demo-mangler': 'main',
    'jquery': '../../../../../bower_components/jquery/dist/jquery',

    'jquery-ujs': '../../../../../bower_components/jquery-ujs/src/rails'

  }
})

