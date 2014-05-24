module.exports = function (...args) {
    var sum = args.reduce(function (soFar, value) {
        return soFar + value;
    }, 0);

    return sum / args.length;
};
