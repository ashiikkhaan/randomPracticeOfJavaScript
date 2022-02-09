var tableLength = [12, 23, 53];
console.log(tableLength.length);
console.log(tableLength[0]);
console.log(tableLength.indexOf(53));
tableLength[0] = 90;
console.log(tableLength);
if (tableLength[0] == 90) {
    console.log('its price will be high!');
}
if (tableLength[2] == 53) {
    console.log('its price will be medium')
}