"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var setupBasics = require("../../setup-basics");
var traceurProcessor = require("../../traceur-processor");
var singleFunctionProcessor = require("../../single-function-processor");

module.exports = singleFunctionProcessor(traceurProcessor(setupBasics(filecheck(exercise))));

module.exports.addTestCases(require("./test-cases.json"));
module.exports.solutionFunctionName = "average";
