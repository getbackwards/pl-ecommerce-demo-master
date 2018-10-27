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
       let hasValue = object[key] !== undefined;
       return hasValue;
    },

    invert (object) {
        let invertedObject = {};
        for (key in object) {
            let originalValue = object[key];
            invertedObject[originalValue] = key;
        }

        return invertedObject;
    },

    findKey (object, predicate) {
        for (key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);

            if (predicateReturnValue === true) {
                return key;
            }

        }

        return undefined;
    }
};

// findKey tests
let users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
};

let car = {type:"Fiat", model:"500", color:"white"};

// console.log(_.findKey(car, function(o) { return o.type === "Fiat"; }))

// console.log(_.findKey(users.barney, function(o) { return o.barney.age < 40; }));
console.log(_.findKey(users, function(o) { return o.age < 40; }));
// => 'barney' (iteration order is not guaranteed)

// The `_.matches` iteratee shorthand.
//console.log(_.findKey(users, { 'age': 1, 'active': true }));
// => 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
//console.log(_.findKey(users, ['active', false]));
// => 'fred'

// The `_.property` iteratee shorthand.
//console.log(_.findKey(users, 'active'));
// => 'barney'

// invert tests
// let testObj = {A : 1, B : 2, C : 3, D : 4};
// console.log(_.invert(testObj));

// has tests
// let object = {
//     'a': {
//         'b': 2
//     }
// };
//
// let car = {type:"Fiat", model:"500", color:"white"};
//
// console.log(_.has(object, 'b'));
// console.log(_.has(car, 'model'));

// pad tests
// _.pad('hi', 7);
// console.log(_.pad('hi', 7));

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