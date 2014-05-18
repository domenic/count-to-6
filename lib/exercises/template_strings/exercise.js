"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var execute = require("workshopper-exercise/execute");
var comparestdout = require("workshopper-exercise/comparestdout");
var traceurProcessor = require("../../traceur-processor");

module.exports = comparestdout(execute(traceurProcessor(filecheck(exercise))));
