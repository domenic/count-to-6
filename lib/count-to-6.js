#!/usr/bin/env node

"use strict";

var workshopper = require("workshopper");
var path = require("path");

workshopper({
    name: "count-to-6",
    title: "COUNT UP TO VERSION 6 OF JAVASCRIPT",
    subtitle: "\x1b[23mSelect an exercise and hit \x1b[3mEnter\x1b[23m to begin",
    exerciseDir: path.resolve(__dirname, "exercises"),
    appDir: __dirname,
    helpFile: path.resolve(__dirname, "help.txt"), // doesn't seem to be working
    menuItems: [] // https://github.com/rvagg/workshopper/commit/cef8219ca2919964113c6daedd78a5db8404051b
});
