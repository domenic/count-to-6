"use strict";
var traceur = require("traceur");
var fs = require("fs");
var q = require("q");
var path = require("path");
var os = require("os");
var rimraf = require("rimraf");

var tmpDir = path.resolve(os.tmpDir(), "_count-to-6_" + process.pid);

module.exports = function (exercise) {
    exercise.addProcessor(processor);
    exercise.addCleanup(cleanup);

    return exercise;
};

function processor(mode, callback) {
    var exercise = this;

    q.nfcall(fs.mkdir, tmpDir).then(function () {
        return q.all([
            writeTranspiled(exercise.submission),
            writeTranspiled(exercise.solution)
        ]);
    })
    .spread(function (newSubmission, newSolution) {
        exercise.submission = newSubmission;
        exercise.solution = newSolution;
    })
    .nodeify(callback);
}

function cleanup(mode, passed, callback) {
    rimraf(tmpDir, callback);
}

function writeTranspiled(filename) {
    return readFile(filename).then(function (contents) {
        var newFilename = path.resolve(tmpDir, Math.random() + ".js");
        var transpiled = transpile(contents, newFilename);
        return writeFile(newFilename, transpiled).thenResolve(newFilename);
    });
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
