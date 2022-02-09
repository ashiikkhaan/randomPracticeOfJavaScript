// // which number is gretest ?
// var a = 11;
// var b = 9;
// var c = 12;
// if (a > b) {
//     console.log('A > B, now compare A with C');
//     if (a > c) {
//         console.log('print A');
//     }
//     else {
//         console.log('print C');
//     }
// }
// else if (b > c) {
//     console.log('B > A and C, print B')
// }
// else {
//     console.log(' A < B < C, so print C');
// }
//which one is midium; node compare 
var x = 10;
var y = 5;
var z = 15;
if ((y > x && x > z) || (z > x && x > y)) {
    console.log('x is middle variable');
}

// compare string and number:
function compare(a, b) {
    if (a == b) {
        return true;
    }
    else {
        return false;
    }
}
const result = compare(15, "15");
console.log(result);

// another example
function compare(c, d) {
    if (c.toString() === d) {
        return true;
    }
    else {
        return false;
    }
}
const comparisionResult = compare(25, 25);
console.log(comparisionResult);