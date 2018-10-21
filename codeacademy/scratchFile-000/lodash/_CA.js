const _ = {
    clamp (number, lower, upper) {
        let lowerClampedValue = Math.max(lower, number);
        let clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },
    
    inRange (number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }

        if (start > end) {
            const temp = end;
            end = start;
            start = temp;
        }

        let isInRange = number <= end && number > start;

        return isInRange;
    },

    words (string) {
        let words = string.split(' ');
        return words;
    },

    pad (string, length) {
        if (length <= string.length) {
            return string;
        }

        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - (string.length + startPaddingLength);
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        
        return paddedString;
    }
};

// pad tests
// _.pad('hi', 7);
console.log(_.pad('hi', 7));

// inRange tests
// console.log(_.inRange(3, 5, 15));
// console.log(_.inRange(7, 5, 15));
// console.log(_.inRange(17, 5, 15));

// clamp tests
// console.log(_.clamp(3, 5, 15));
// console.log(_.clamp(7, 5, 15));
// console.log(_.clamp(17, 5, 15));

// Do not write or modify code below this line.
module.exports = _;