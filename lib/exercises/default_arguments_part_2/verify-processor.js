"use strict";
var testCases = require("./test-cases.js");

module.exports = function (exercise) {
    exercise.addVerifyProcessor(verify);

    return exercise;
};

function verify(callback) {
    var submission = require(this.submission);
    var solution = require(this.solution);

    var allPassed = true;
    for (var i = 0; i < testCases.length; ++i) {
        var values = testCases[i];

        var submissionResult = submission.apply(undefined, values);
        var solutionResult = solution.apply(undefined, values);

        var passFail = submissionResult === solutionResult ? "pass" : "fail";
        var args = values.map(function (v) {
            return v === undefined ? "undefined" :
                   typeof v === "string" ? "\"" + v + "\"" :
                   v;
        });
        this.emit(passFail, "makeImportant(" + args.join(", ") + ") should equal " + solutionResult);

        allPassed = allPassed && passFail === "pass";
    }

    process.nextTick(function () {
        callback(null, allPassed);
    });
}
