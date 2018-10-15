const _ = {
    clamp (number, lower, upper) {
        let lowerBound = Math.max(number, lower);
        let upperBound = Math.min(number, upper);
        // console.log('This is the numer ' + number);

        let output = [`The number is ${number}`, `The lowerBound is ${lowerBound}`, `The upperBound is ${upperBound}`];

        return output;
    }
};
console.log(_.clamp(17, 5, 15));
console.log(_.clamp(3, 5, 15));
console.log(_.clamp(7, 5, 15));

// Do not write or modify code below this line.
module.exports = _;