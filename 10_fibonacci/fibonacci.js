const fibonacci = function (val) {
    let fibonacciArr = [1, 1];

    if (+val < 0) {
        return 'OOPS';
    };

    if (+val === 0) {
        return 0;
    };

    if (+val === 1) {
        return 1;
    };

    for (let i = 2; i <= +val; i++) {
        fibonacciArr[i] = fibonacciArr[i - 2] + fibonacciArr[i - 1];
    };

    return fibonacciArr[+val - 1];

};

// Do not edit below this line
module.exports = fibonacci;
