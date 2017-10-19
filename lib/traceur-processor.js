"use strict";
var traceur = require("traceur");
var fs = require("fs");
var q = require("q");
var path = require("path");
var os = require("os");
var rimraf = require("rimraf");

var tmpDir = path.resolve(os.tmpdir(), "_count-to-6_" + process.pid);
var runtimeContents = fs.readFileSync(traceur.RUNTIME_PATH, { encoding: "utf-8" });

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
        return transpile(contents, filename).then(function (transpiled) {
            return writeFile(newFilename, transpiled).thenResolve(newFilename);
        });
    });
}

function readFile(filename) {
    return q.nfcall(fs.readFile, filename, { encoding: "utf8" });
}

function writeFile(filename, contents) {
    return q.nfcall(fs.writeFile, filename, contents, { encoding: "utf8" });
}

var transpile = q.fbind(function (contents, filename) {
    var transpiled = traceur.compile(contents, {
        filename: filename,
        modules: "inline"
    });

    return runtimeContents + transpiled;
});
