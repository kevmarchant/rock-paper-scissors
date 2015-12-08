module.exports = function(grunt) {

	grunt.initConfig({
		
		watch: {
			scripts: {
				files: ['scripts/viewmodels/*.js', 'scripts/main.js'],
				tasks: ['uglify', 'jshint']
			},
			css: {
				files: ['styles/**/*.scss'],
				tasks: ['sass', 'cssmin']
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'scripts/viewmodels/*.js', 'scripts/main.js', 'scripts/tests/*.js']
		},
		uglify: {
			knockout: {
				src: ['node_modules/knockout/build/output/knockout-latest.js'],
				dest: 'public/js/knockout.min.js'
			},
			dist: {
				src: ['scripts/viewmodels/*.js', 'scripts/main.js'],
				dest: 'public/js/rps.dist.js'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/css/styles.css' : 'styles/styles.scss'
				}
			}
		},
		cssmin: {
			dist: {
				options: {
					keepSpecialComments: 0
				},
				files: {
					'public/css/styles.css': 'public/css/styles.css'
				}
			}
		}
		
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin']);

};