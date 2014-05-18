"use strict";
var traceur = require("traceur");
var fs = require("fs");
var q = require("q");

module.exports = function (exercise) {
    exercise.addProcessor(processor);

    return exercise;
};

function processor(mode, callback) {
    var that = this;
    var submission = this.submission;
    var newSubmission = submission + ".transpiled.js";

    readFile(submission).then(function (contents) {
        var transpiled = transpile(contents, newSubmission);
        return writeFile(newSubmission, transpiled);
    })
    .then(function () {
        that.submission = newSubmission;
    })
    .nodeify(callback);
}

function readFile(filename) {
    return q.nfcall(fs.readFile, filename, { encoding: "utf8" });
}

function writeFile(filename, contents) {
    return q.nfcall(fs.writeFile, filename, contents, { encoding: "utf8" });
}

function transpile(contents, outputFilename) {
    var result = traceur.compile(contents, {
        filename: outputFilename
    });

    if (result.error) {
        throw result.error;
    }

    return result.js;
}
