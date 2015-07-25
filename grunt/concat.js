module.exports = {
    js: {
        src: '<%= config.files.script %>',
        dest: '<%= config.dir.dist %>/js/app.js'
    },
		lib: {
        src: '<%= config.files.lib%>',
        dest: '<%= config.dir.dist %>/js/lib.js'
		}
};
