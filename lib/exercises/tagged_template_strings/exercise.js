"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var execute = require("workshopper-exercise/execute");
var comparestdout = require("workshopper-exercise/comparestdout");
var traceurProcessor = require("../../traceur-processor");
var namesAndComments = require("./names-and-comments.json");

module.exports = comparestdout(execute(traceurProcessor(filecheck(exercise))));

module.exports.addSetup(function (mode, callback) {
    var random = Math.floor(Math.random() * namesAndComments.length);
    var name = namesAndComments[random][0];
    var comment = namesAndComments[random][1];

    this.submissionArgs = this.solutionArgs = [name, comment];

    process.nextTick(callback);
});
