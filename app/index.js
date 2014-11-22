'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var NgSuperGenerator = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the NgSuper generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'appName',
            message: 'What would you like to name this app?',
            default: this.appname
        }, {
            type: 'confirm',
            name: 'includeScss',
            message: 'Would you like to include Scss in this app?',
            default: false
        }];

        this.prompt(prompts, function(props) {
            this.appname = props.appName;
            this.includeScss = props.includeScss;
            this.ngVer = "1.3.0";
            this.log('You have selected ' + this.includeScss);


            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            this.template.apply(this, ['_package.json', 'package.json']);
            this.template.apply(this, ['_bower.json', 'bower.json']);
            this.template.apply(this, ['_index.html','app/index.html']);

            this.src.copy('_gruntfile.js', 'gruntfile.js');
            this.src.copy('_configLoader.js','configLoader.js');
            this.src.copy('tasks/_connect.js','tasks/connect.js');
            this.src.copy('tasks/_watch.js','tasks/watch.js');
            this.src.copy('_.gitignore','.gitignore');
        },

        projectfiles: function() {
            this.src.copy('editorconfig', '.editorconfig');
            this.src.copy('jshintrc', '.jshintrc');
        }
    },

    end: function() {
        this.installDependencies();
    }
});

module.exports = NgSuperGenerator;
