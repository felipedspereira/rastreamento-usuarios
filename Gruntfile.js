module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            all: ['dist/']
        },
        copy: {
            index: {
                src: 'index.html',
                dest: 'dist/index.html',
            },
            pages: {
                src: 'pages/**/*.html',
                dest: 'dist/',
            },
            js: {
                src: 'js/trackingJS.min.js',
                dest: 'dist/js/trackingJS.min.js',
            },
            images: {
                src: 'images/**/*.jpg',
                dest: 'dist/',
            },
            css: {
                src: 'css/**/*.css',
                dest: 'dist/',
            }
        },
        'string-replace': {
            dev: {
                files: {
                    'dist/': ['pages/**/*.html', 'index.html'],
                },
                options: {
                    replacements: [{
                            pattern: 'https://rastreamento-usuarios-app.herokuapp.com/activity',
                            replacement: 'http://localhost:3000/activity'
                        },
                        {
                            pattern: 'https://rastreamento-usuarios-app.herokuapp.com/enableActivity',
                            replacement: 'http://localhost:3000/enableActivity'
                        }
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build-dev', ['clean', 'copy', 'string-replace:dev']);
    grunt.registerTask('build-prod', ['clean', 'copy']);
}
