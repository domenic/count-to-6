"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var execute = require("workshopper-exercise/execute");
var comparestdout = require("workshopper-exercise/comparestdout");
var setupBasics = require("../../setup-basics");
var traceurProcessor = require("../../traceur-processor");
var verifyProcessor = require("./verify-processor");

module.exports = verifyProcessor(traceurProcessor(setupBasics(filecheck(exercise))));
