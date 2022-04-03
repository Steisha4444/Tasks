function sequence(start = 0, step = 1) {
    let number = start;
    return function () {
        var value = number;
        number += step;
        return value;
    }
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8