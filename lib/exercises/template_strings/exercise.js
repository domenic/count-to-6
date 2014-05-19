"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var execute = require("workshopper-exercise/execute");
var comparestdout = require("workshopper-exercise/comparestdout");
var traceurProcessor = require("../../traceur-processor");

module.exports = comparestdout(execute(traceurProcessor(filecheck(exercise))));

var names = ["ES6", "CampJS", "JavaScript", "ECMAScript", "TC39"];

module.exports.addSetup(function (mode, callback) {
    var random = Math.floor(Math.random() * names.length);
    var name = names[random];

    this.submissionArgs = this.solutionArgs = [name];

    process.nextTick(callback);
});
