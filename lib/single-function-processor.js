"use strict";

module.exports = function (exercise) {
    if (typeof exercise.addTestCases !== "function") {
        extendExercise(exercise);
    }

    return exercise;
};

function extendExercise(exercise) {
    exercise._testCases = [];
    exercise.solutionFunctionName = "solution"; // override if desired

    exercise.addTestCases = function (testCases) {
        if (!Array.isArray(testCases)) {
            throw new TypeError("Must supply an array of test cases.");
        }

        this._testCases.push.apply(this._testCases, testCases);
    };

    exercise.addVerifyProcessor(verify);
    exercise.addRunProcessor(run);
}

function verify(callback) {
    if (!this.submission || !this.solution) {
        throw new TypeError("Submission and solution paths must be present on the exercise object.");
    }

    var submission = require(this.submission);
    var solution = require(this.solution);

    var allPassed = true;
    for (var i = 0; i < this._testCases.length; ++i) {
        var args = this._testCases[i];

        var submissionResult = submission.apply(undefined, args);
        var solutionResult = solution.apply(undefined, args);

        var passFail = submissionResult === solutionResult ? "pass" : "fail";

        var formattedArgs = formatArgs(args);
        var opts = {
            name: this.solutionFunctionName,
            args: formattedArgs,
            expected: solutionResult,
            actual: submissionResult
        };
        var message = this.__(passFail + '.singleFunction', opts);

        this.emit(passFail, message);

        allPassed = allPassed && passFail === "pass";
    }

    process.nextTick(function () {
        callback(null, allPassed);
    });
}

function run(callback) {
    if (!this.submission) {
        throw new TypeError("Submission path must be present on the exercise object.");
    }

    var submission = require(this.submission);

    for (var i = 0; i < this._testCases.length; ++i) {
        var args = this._testCases[i];

        var submissionResult = submission.apply(undefined, args);

        var formattedArgs = formatArgs(args);
        var message = this.solutionFunctionName + "(" + formattedArgs + ") returned " + submissionResult;
        console.log(message);
    }

    process.nextTick(callback);
}

function formatArgs(args) {
    var forDisplay = args.map(function (arg) {
        if (arg === undefined) {
            return "undefined";
        }
        if (typeof arg === "string") {
            return JSON.stringify(arg);
        }
        return arg;
    });

    return forDisplay.join(", ");
}
