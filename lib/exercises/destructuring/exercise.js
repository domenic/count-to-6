"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var execute = require("workshopper-exercise/execute");
var comparestdout = require("workshopper-exercise/comparestdout");
var traceurProcessor = require("../../traceur-processor");
var inputs = require("./inputs.json");

module.exports = comparestdout(execute(traceurProcessor(filecheck(exercise))));

module.exports.addSetup(function (mode, callback) {
    var random = Math.floor(Math.random() * inputs.length);
    var input = inputs[random];

    this.submissionArgs = this.solutionArgs = input;

    process.nextTick(callback);
});
