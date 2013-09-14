module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      typesc:
        files: 'public/qflick.min.js': ['public/qflick.js']

      lib:
        files: 'public/lib.min.js': ['public/lib.js']

    concat:
      typesc:
        src: ['src/qflick/*.js']
        dest: 'public/qflick.js'

      lib:
        src: ['lib/*/index.js']
        dest: 'public/lib.js'

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
        tasks: ['typescript', 'concat', 'uglify', 'clean']
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

  grunt.registerTask('default', ['typescript', 'concat', 'uglify', 'clean', 'compass'])
  grunt.registerTask('server', ['connect'])
