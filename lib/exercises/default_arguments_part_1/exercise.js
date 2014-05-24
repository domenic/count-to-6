"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var setupBasics = require("../../setup-basics");
var traceurProcessor = require("../../traceur-processor");
var verifyProcessor = require("./verify-processor");

module.exports = verifyProcessor(traceurProcessor(setupBasics(filecheck(exercise))));
