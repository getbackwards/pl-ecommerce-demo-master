const _ = {
    clamp (number, lower, upper) {
        let lowerClampedValue = Math.max(lower, number);
        let clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },

    inRange (number, startValue, endValue) {
        if (endValue === undefined) {
            endValue = startValue;
            startValue = 0;
        }

        if (startValue > endValue) {
            const tempEndValue = endValue;
            endValue = startValue;
            startValue = tempEndValue;
        }

        if (number <= endValue && number > startValue) {
            return true;
        }
        return false;
    }
};

console.log(_.clamp(3, 5, 15));
console.log(_.clamp(7, 5, 15));
console.log(_.clamp(17, 5, 15));

// Do not write or modify code below this line.
module.exports = _;