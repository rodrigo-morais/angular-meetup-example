module.exports = function (grunt) {
    grunt.initConfig({
        'babel': {
            options: {
                sourceMap: true/*,
                modules: 'amd'*/
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['**/*.js'],
                    dest: 'dist/app',
                    ext: '.js'
                }]
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
            },
            templates: {
                cwd: './',
                src: 'app/**/templates/*.html',
                dest: 'dist/',
                expand: true
            },
            app_css: {
                cwd: './',
                src: 'app/**/css/*.css',
                dest: 'dist/',
                expand: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['babel', 'copy']);
};