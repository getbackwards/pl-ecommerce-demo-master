const _ = {
    clamp (number, lower, upper) {
        let lowerClampedValue = Math.max(lower, number);
        let clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    }
};

console.log(_.clamp(3, 5, 15));
console.log(_.clamp(7, 5, 15));
console.log(_.clamp(17, 5, 15));

// Do not write or modify code below this line.
module.exports = _;