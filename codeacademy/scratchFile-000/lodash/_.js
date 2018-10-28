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
    },

    drop (array, n) {
        if (n === undefined) {
            n = 1;
        }

        let droppedArray = array.slice(n);

        return droppedArray;
    },

    dropWhile (array, predicate) {
        let dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index);
        });

        let droppedArray = this.drop(array, dropNumber);

        return droppedArray;
    },

    chunk (array, size) {
        //test stuff
        // array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // size = 3;
        // console.log(array.length);
        let parameters = [array, size];

        if (size === undefined) {
            // console.log(size);
            size = 1;
        }

        // console.log(size);

        let arrayChunks = [];

        // for (let i = 0; i < array.length; i ++) {
            // console.log(size);
            // console.log(array[i]);
            // let arrayChunk = array.slice(i);

            // arrayChunks.push(arrayChunk);
        // }
        var i,j,temparray,chunk = 10;
        for (i=0,j=array.length; i<j; i+=chunk) {
            temparray = array.slice(i,i+chunk);
            // do whatever
        }


        for (let i = 0; i < array.length; i++) {
            console.log(array.indexOf(i));
            // console.log(array[i]);
            // console.log(size);
            arrayChunks.push(i);
        }

        return arrayChunks;
        // return size;
        // return array.length;
        // return parameters;
        // return size;
    }

    //console.log(array.indexOf(1));
};

let chunkTestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// _.chunk(chunkTestArray, 3);
// console.log(_.chunk(chunkTestArray, 3));


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let size = 3;

console.log(_.chunk(chunkTestArray), 3);
// Do not write or modify code below this line.
module.exports = _;