module.exports = function(grunt) {

  grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

   mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    },

    eslint: {
      target: [
        'client/*.js',
          'server/*.js',
        'server/**/*.js'
      ]
    }
 });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');
  //grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-run-node');

  grunt.registerTask('server-dev', function (target) {
    grunt.task.run([ 'nodemon', 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'eslint',
    'mochaTest'
  ]);

 grunt.registerTask('deploy', [
      //hmm
  ]);


};
