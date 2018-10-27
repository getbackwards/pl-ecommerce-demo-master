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
    },

    drop (array, number) {
        let dropArray = [];

        if (number === undefined) {
            dropArray = array.slice(1);
            return dropArray;
        }

        dropArray = array.slice(number);

        return dropArray;
    },

    dropWhile (array, predicate) {
        let dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index);
        });

        let droppedArray = this.drop(array, dropNumber);

        return droppedArray;
    },

    chunk (array, size) {
        if (size = undefined) {
            size = 1;
        }

        let chunkedArray = [];

        for (let i = 0; i < array.length; i + size) {
            chunkedArray.push(array.slice(size));
        }

        return chunkedArray;
    }
};

let users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
};

// dropWhile tests
// console.log(_.dropWhile(users, function(o) { return !o.active; }));
// => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
// console.log(_.dropWhile(users, { 'user': 'barney', 'active': false }));
// => objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
// console.log(_.dropWhile(users, ['active', false]));
// => objects for ['pebbles']

// The `_.property` iteratee shorthand.
// console.log(_.dropWhile(users, 'active'));
// => objects for ['barney', 'fred', 'pebbles']

// drop tests
// console.log(_.drop([1, 2, 3]));
// => [2, 3]

// console.log(_.drop([1, 2, 3], 2));
// => [3]

// console.log(_.drop([1, 2, 3], 5));
// => []

// console.log(_.drop([1, 2, 3], 0));
// => [1, 2, 3]

// findKey tests
// let car = {type:"Fiat", model:"500", color:"white"};

// console.log(_.findKey(car, function(o) { return o.type === "Fiat"; }))

// console.log(_.findKey(users.barney, function(o) { return o.barney.age < 40; }));
// console.log(_.findKey(users, function(o) { return o.age < 40; }));
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