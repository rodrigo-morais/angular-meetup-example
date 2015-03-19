module.exports = function (grunt) {
    grunt.initConfig({
        'babel': {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/app/app.js': 'app/app.js'
                }
            }
        },
        copy: {
            main: {
                cwd: './',
                src: 'index.html',
                dest: 'dist/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            css: {
                cwd: './',
                src: 'assets/**',
                dest: 'dist/',
                expand: true
            },
            vendor: {
                cwd: './',
                src: 'vendor/**',
                dest: 'dist/',
                expand: true,
                filter: 'isFile'
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['babel', 'copy', 'copy:css']);
};