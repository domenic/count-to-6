"use strict";
var path = require("path");
var fs = require("fs");

module.exports = function (exercise) {
    exercise.addSetup(setup);

    return exercise;
};

// Largely copied from https://github.com/rvagg/workshopper-exercise/blob/master/execute.js
function setup(mode, callback) {
    this.submission = this.args[0];

    if (!this.solution) {
        this.solution = path.resolve(this.dir, "./solution/solution.js");
    }

    this.getSolutionFiles = function (callback) {
        var solutionDir = path.resolve(this.dir, "./solution");

        fs.readdir(solutionDir, function (err, list) {
            if (err) {
                return callback(err);
            }

            list = list.filter(function (f) { return (/\.js$/).test(f); })
                       .map(function (f) { return path.resolve(solutionDir, f); });

            callback(null, list);
        });
    };

    process.nextTick(callback);
}
