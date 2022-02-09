

var a = 7;
var b = 9;
var c = 8;
if ((b > a && a > c) || (c > a && a > b)) {
    console.log('print a');
}
else if ((a > b && b > c) || (c > b && b > a)) {
    console.log('print b');
}
else {
    console.log('print c');
}