
// function partialAny(fn, ...partialArgs) {
//     let newArgs;
//     return function(...args) {
//         let temp = args;
//         newArgs = partialArgs.map(x => x === undefined ? temp.shift(): x);
//         newArgs = [...newArgs, ...temp];
//         return fn.apply(this, newArgs);
//     }
// }


function partialAny(fn, ...args) {
    
    return (...args2) => {

        return fn(...args.map(arg => arg === undefined ? args2.shift() : arg), ...args2)
    }
}

function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3