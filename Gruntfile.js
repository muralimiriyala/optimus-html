const { config } = require("grunt");

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: config('concat'),
      uglify: config('uglify'),
      cssmin: config('cssmin'),
      validation: {
        options: {
          doctype: 'HTML5'
        },
        files: {
          src: ['./*.html']
        }
      },
      cssmin: {
        target: {
          files: {
            'core.bundle.css': ['css/**/*.css', 'css/*.css']
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'dist/core.bundle.js': ['js/*.js', 'js/**/*.js']
          }
        }
      },
      concat: {
        dist: {
          src: ['js/*.js',],
          dest: 'dist/core.bundle.js'
        }
      },
      watch: {
        stylesheets: { 
          files: ['css/**/*.css', 'css/*.css'],
          tasks: ['cssmin'],
          livereload: true
        },
        scripts: {
          files: ['js/*.js', 'js/**/*.js'],
           tasks: ['uglify']
        },
      },
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-w3c-html-validation')
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    // Default task(s).
    grunt.registerTask('default', ['validation', 'concat', 'uglify', 'cssmin', 'watch']);


  };