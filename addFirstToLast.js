const addFirstToLast = function (array) {
    let result = '';

    if (array.length > 0)
        result = `${array[0]}` + `${array[array.length - 1]}`;

    return result;
}