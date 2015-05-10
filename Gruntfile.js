module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      client: {
        files: [
          {
            src: 'src/client/client.js',
            dest: 'tmp/killer-bunnies.js'
          }
        ]
      }
    },
    uglify: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %>-<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: [
          {
            src: 'tmp/killer-bunnies.js',
            dest: 'build/killer-bunnies.js'
          }
        ]
      },
      dev: {
        options: {
          beautify: true
        },
        files: [
          {
            src: 'tmp/killer-bunnies.js',
            dest: 'build/killer-bunnies.js'
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            src: 'src/client/index.html',
            dest: 'build/index.html'
          }
        ]
      },
      dev: {
        files: [
          {
            src: 'src/client/index.html',
            dest: 'build/index.html'
          }
        ]
      }
    },
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: 'src/client/',
            src: '**/*.{png,jpg,gif}',
            dest: 'build/'
          }
        ]
      }
    },
    copy: {
      images: {
        files: [
          {
            expand: true,
            cwd: 'src/client/',
            src: '**/*.{png,jpg,gif}',
            dest: 'build/'
          }
        ]
      }
    },
    shell: {
      serve: {
        command: 'cd build; serve'
      }
    },
    clean: ['tmp/']
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['imagemin', 'browserify:client', 'uglify:dev', 'htmlmin:dev', 'clean']);
  grunt.registerTask('dev', ['copy:images', 'browserify:client', 'uglify:dev', 'htmlmin:dev', 'clean', 'shell:serve']);
  grunt.registerTask('dist', ['imagemin', 'browserify:client', 'uglify:dist', 'htmlmin:dist', 'clean']);

};
