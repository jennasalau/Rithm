module.exports = function(config) {
    config.set({

        //basePath: '',
        frameworks: ['browserify', 'jasmine'],

        browsers: ['Chrome'],

        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        exclude: [
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

        // define reporters, port, logLevel, browsers etc.
    });
};