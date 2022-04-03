function fmap(a, gen) {
    return function () {

        let newArray = [];

        for (let i = 0; i < arguments.length; i++) {
            newArray[i] = arguments[i];
        }

        x1 = a(gen.apply(null, newArray));

        return x1;
    }

}

var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2