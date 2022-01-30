const getFirstAmountSorted = function (inputArray, num) {
    inputArray.sort();

    let array = inputArray.slice(0, num);

    return array;
}