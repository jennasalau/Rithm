module.exports = function(config) {
    config.set({

        browsers: ['Chrome'], // Use `npm test` to run tests in phantom JS

        frameworks: ['browserify', 'jasmine'],

        files: [
            'test/**/*.spec.js'
        ],

        exclude: [
          'node_modules'
        ],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ],
            sourceType: 'module'
        },

        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        plugins: [
            "karma-jasmine",
            "karma-browserify",
            "karma-chrome-launcher",
            "karma-phantomjs-launcher"
        ]
    });
};
