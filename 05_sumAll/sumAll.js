const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
        return 'ERROR'
    }
    
    let sum = 0;
    let initialNum = num1;
    let finalNum = num2;

    if (num1 > num2) {
        initialNum = num2;
        finalNum = num1;
    };

    for (let i = initialNum; i <= finalNum; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
