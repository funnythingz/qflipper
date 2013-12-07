module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      typesc:
        files: 'qflipper.min.js': ['qflipper.js']

    concat:
      qflipper:
        src: ['src/**/*.js']
        dest: 'qflipper.js'

      license:
        src: ['license/mit.js', 'qflipper.js']
        dest: 'qflipper.js'

      licenseMin:
        src: ['license/mit.min.js', 'qflipper.min.js']
        dest: 'qflipper.min.js'

      options:
        separator: ';'

    ts:
      base:
        src: ['src/**/*.ts']
        options:
          sourceMap: false

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      ts:
        files: ['src/**/*.ts']
        tasks: ['ts', 'concat', 'uglify', 'concat', 'clean']
        options:
          atBegin: true

      css:
        files: ['sass/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'tscommand.tmp.txt']

    connect:
      server:
        options:
          port: 8000
          base: './'
          keepalive: true

  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-ts')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['ts', 'concat', 'uglify', 'concat', 'clean', 'compass'])
  grunt.registerTask('server', ['connect'])
