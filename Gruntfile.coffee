module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      typesc:
        files: 'public/qflipper.min.js': ['public/qflipper.js']

    concat:
      qflipper:
        src: ['src/**/*.js']
        dest: 'public/qflipper.js'

      license:
        src: ['license/mit.js', 'public/qflipper.js']
        dest: 'public/qflipper.js'

      licenseMin:
        src: ['license/mit.min.js', 'public/qflipper.min.js']
        dest: 'public/qflipper.min.js'

      options:
        separator: ';'

    typescript:
      base:
        src: ['src/**/*.ts']

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      ts:
        files: ['src/**/*.ts']
        tasks: ['typescript', 'concat', 'uglify', 'concat', 'clean']
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
          base: 'public'
          keepalive: true

  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['typescript', 'concat', 'uglify', 'concat', 'clean', 'compass'])
  grunt.registerTask('server', ['connect'])
