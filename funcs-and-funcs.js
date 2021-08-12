"use strict";
exports.__esModule = true;
exports.arrayMutate = exports.printToFile = void 0;
function printToFile(text, callback) {
    console.log(text);
    callback();
}
exports.printToFile = printToFile;
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.arrayMutate = arrayMutate;
console.log(arrayMutate([1, 2, 3], function (v) { return v * 10; }));
