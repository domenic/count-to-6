module.exports = (...args) => {
    var sum = args.reduce((soFar, value) => soFar + value, 0);
    return sum / args.length;
};
