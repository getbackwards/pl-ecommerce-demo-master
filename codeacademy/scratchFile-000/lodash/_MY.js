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
    },

    words (string) {
        return string.split(' ');
    },

    pad (string, length) {
        if (string.length > length) {
            return string;
        }

        let paddingStart = Math.floor((length - string.length) / 2);
        let paddingEnd = length - (string.length + paddingStart);
        let padStart = '';
        let padEnd = '';

        for (let i = 0; i < paddingStart; i++) {
            padStart += ' ';
        }

        for (let j = 0; j < paddingEnd; j++) {
            padEnd += ' ';
        }

        let paddedString = padStart + string + padEnd;
        
        return paddedString;
    },

    has (object, key) {
        // let objKey = object.key !== null || void || NaN;
        // return objKey;

        if (key in object) {
            return true;
        }

        return false;
    },

    invert (object) {
        let invertedObject = {};
        for (key in object) {
            invertedObject[object[key]] = key;
        }

        return invertedObject;
    }
};

// invert tests
let testObj = {A : 1, B : 2, C : 3, D : 4};
console.log(_.invert(testObj));

// has tests
// let object = {
//     'a': {
//         'b': 2
//         }
//     };
//
// let car = {type:"Fiat", model:"500", color:"white"};
//
// console.log(_.has(object, 'a'));
// console.log(_.has(car, 'type'));

// pad tests
// _.pad('hi', 7);
// console.log(_.pad('hi', 7));
//console.log(_.pad('hi', 1));
//console.log(_.pad('hello', 3));
//console.log(_.pad('welcome back', 10));

// words tests
// let wordsString = "This solution probably has the most potential solutions of the methods we have implemented thus far.";
// console.log(_.words(wordsString));

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