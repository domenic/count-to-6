#!/usr/bin/env node

"use strict";

var workshopper = require("workshopper");
var path = require("path");

workshopper({
    name: "count-to-6",
    exerciseDir: path.resolve(__dirname, "exercises"),
    appDir: __dirname,
    languages: ['en', 'fr'],
    helpFile: path.resolve(__dirname, "i18n/help/{lang}.txt")
});
