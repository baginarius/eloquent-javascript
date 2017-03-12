var isEven = function(input) {
    if (input < 0) {
        input = input * -1;
    }
    if (input == 0) {
        return true;
    } else if (input == 1) {
        return false;
    } else {
        return isEven(input - 2);
    }
}

console.log(isEven(2));
console.log(isEven(1));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
