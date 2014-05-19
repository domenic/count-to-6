"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var execute = require("workshopper-exercise/execute");
var comparestdout = require("workshopper-exercise/comparestdout");
var traceurProcessor = require("../../traceur-processor");

module.exports = comparestdout(execute(traceurProcessor(filecheck(exercise))));

module.exports.addSetup(function (mode, callback) {
    var random = 3 + Math.floor(Math.random() * 10);
    var numbers = [];
    for (var i = 0; i < random; ++i) {
        numbers[i] = Math.floor(Math.random() * 100);
    }

    this.submissionArgs = this.solutionArgs = numbers;

    process.nextTick(callback);
});
