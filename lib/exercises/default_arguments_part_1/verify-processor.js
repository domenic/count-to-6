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
        var numbers = testCases[i];

        var submissionResult = submission.apply(undefined, numbers);
        var solutionResult = solution.apply(undefined, numbers);

        var passFail = submissionResult === solutionResult ? "pass" : "fail";
        var args = numbers.map(function (v) {
            return v === undefined ? "undefined" : v;
        });
        this.emit(passFail, "midpoint(" + args.join(", ") + ") should equal " + solutionResult);

        allPassed = allPassed && passFail === "pass";
    }

    process.nextTick(function () {
        callback(null, allPassed);
    });
}
