function bind(fn, context) {
    const rest = Array.prototype.slice.call(arguments, 2);
    return function () {
        const args = Array.prototype.slice.call(arguments);
        return fn.apply(context, rest.concat(args));
    }
};

window.x = 1;
var ctx = { x: 2 };

function testThis(a) { console.log("x=" + this.x + ", a=" + a); }
console.log(testThis(100)); // x=1, a=100
var boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100