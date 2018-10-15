const _ = {
    clamp (number, lower, upper) {
        let lowerBound = Math.max(lower, number);
        let upperBound = Math.min(number, upper);

        if (number < lowerBound) {
            return lowerBound;
        } else if (number > upperBound) {
            return upperBound;
        } else {
            return number;
        }
    }
};

console.log(_.clamp(3, 5, 15));
console.log(_.clamp(7, 5, 15));
console.log(_.clamp(17, 5, 15));

// Do not write or modify code below this line.
module.exports = _;