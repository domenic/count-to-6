"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var setupBasics = require("../../setup-basics");
var traceurProcessor = require("../../babel-processor");
var singleFunctionProcessor = require("../../single-function-processor");

module.exports = singleFunctionProcessor(traceurProcessor(setupBasics(filecheck(exercise))));

module.exports.addTestCases(require("./test-cases"));
module.exports.solutionFunctionName = "makeImportant";
