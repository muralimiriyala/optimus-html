const { config } = require("grunt");
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    terser: {
      options: {
        compress: {
          drop_console: true
        },
        mangle: true,
        output: {
          comments: false
        }
      },
      my_target: {
        files: {
          'dist/core.bundle.js': ['dist/core.concat.js']
        }
      }
    },

    concat: {
      dist: {
        src: ['js/*.js', 'js/**/*.js'],
        dest: 'dist/core.concat.js'
      }
    },

    cssmin: {
      target: {
        files: {
          'core.bundle.css': ['css/**/*.css', 'css/*.css']
        }
      }
    },

    validation: {
      options: {
        doctype: 'HTML5'
      },
      files: {
        src: ['./*.html']
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
        tasks: ['concat', 'terser']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-terser');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-w3c-html-validation');

  // Default task(s).
  grunt.registerTask('default', ['validation', 'concat', 'terser', 'cssmin', 'watch']);
};
