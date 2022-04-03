function filter(arr, fn) {

    let filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            filtered.push(arr[i]);
        }

    }
    return filtered;
}


var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]
console.log(fil(input, isEven)); // [2, 4, 6]