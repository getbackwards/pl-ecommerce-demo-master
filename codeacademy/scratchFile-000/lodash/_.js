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
    },

    has (object, key) {
        if (key in object) {
            return true;
        }

        return false;
    }
};

// Do not write or modify code below this line.
module.exports = _;