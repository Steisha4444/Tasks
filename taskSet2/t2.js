function take(fn, count) {
    let newArray = [];

    for (let index = 0; index < count; index++) {

        newArray[index] = fn();
    }

    return newArray;
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]