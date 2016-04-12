module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/js/**/*.module.js',
      'app/js/**/*.js',
      'test/**/*.test.js'
    ],

    autoWatch : true,

    frameworks: ['mocha','chai'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-chai'
            ]

  });
};
