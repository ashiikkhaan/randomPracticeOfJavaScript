var myArray = ['ashik', 'sobuj', 'rahman'];
myArray[0] = 'push this element';
console.log(myArray);
console.log(myArray.length);
console.log(myArray.indexOf('rahman'));
console.log(myArray[0]);

// another example 
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}

