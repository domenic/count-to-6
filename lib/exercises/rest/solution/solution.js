module.exports = function (...args) {
    var sum = args.reduce(function (value, soFar) {
        return soFar + value;
    }, 0);

    return sum / args.length;
};
