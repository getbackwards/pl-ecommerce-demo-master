const _ = {
    clamp (lower, number, upper) {
        let lowerBound = Math.max(lower, number);
        let upperBound = Math.min(number, upper);

        if (number < lowerBound) {
            return lowerBound
        } else if (number > upperBound) {
            return upperBound
        } else {
            return number
        }

        // return Math.max(lower, number) + Math.min(number, upper);

        // let lowerBound = Math.max(number, lower);
        // let upperBound = Math.min(number, upper);
        // console.log('This is the numer ' + number);

        // let output = [`The number is ${number}`, `The lowerBound is ${lowerBound}`, `The upperBound is ${upperBound}`];
        // let output = `The number is ${number}, The lowerBound is ${lowerBound}, The upperBound is ${upperBound}`;

        // return output;
    }
};

console.log(_.clamp(5, 3, 15));
console.log(_.clamp(5, 7, 15));
console.log(_.clamp(5, 17, 15));

// lower - this works
// console.log(_.clamp(5, 3));
// console.log(_.clamp(5, 7));
// console.log(_.clamp(5, 17));

// upper -  this works
// console.log(_.clamp(3, 15));
// console.log(_.clamp(7, 15));
// console.log(_.clamp(17, 15));

// Do not write or modify code below this line.
module.exports = _;