const scan = function (inputArr) {
    let result = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === 'contraband')
            result.push(i);
    }

    return result;
}