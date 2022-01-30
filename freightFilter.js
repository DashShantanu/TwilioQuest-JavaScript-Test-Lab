const scanAndFilter = function (arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str)
            arr.splice(i, 1);
    }

    return arr;
}