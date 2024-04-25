const palindromes = function (string) {
    let cleanedString = string.toLowerCase().replace(/\W/g, "");
    let reversedCleanedString = cleanedString.split("").reverse().join("");
    return (cleanedString === reversedCleanedString);
};

// Do not edit below this line
module.exports = palindromes;
