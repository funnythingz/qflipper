module.exports = (grunt)->

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('default', ['typescript', 'uglify', 'concat', 'clean', 'compass'])
  grunt.registerTask('server', ['connect'])

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      typesc:
        files: 'qflipper.min.js': ['qflipper.js']

    concat:
      license:
        src: ['license/mit.js', 'qflipper.js']
        dest: 'qflipper.js'

      licenseMin:
        src: ['license/mit.min.js', 'qflipper.min.js']
        dest: 'qflipper.min.js'

      options:
        separator: ';'

    typescript:
      base:
        src: ['src/**/*.ts']
        dest: 'qflipper.js'
        options:
          sourceMap: true

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      ts:
        files: ['src/**/*.ts']
        tasks: ['typescript', 'uglify', 'concat', 'clean']
        options:
          atBegin: true

      css:
        files: ['sass/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

    clean: ['src/**/*.js']

    connect:
      server:
        options:
          port: 8000
          base: './'
          keepalive: true

  })
