// Write your code here:
const findMyKeys = inputArr => {
    let i = 0;
    for (i; i < inputArr.length; i++) {
        if (inputArr[i] === 'keys') {
            return inputArr.indexOf(inputArr[i]);
        }
    }
};

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff));
// findMyKeys(randomStuff);
// Should print 4

// I had this it would consolelog the correct value but I could not get it to return it correctly
// It would always be undefined
// const findMyKeys = (inputArr) => {
//     inputArr.forEach(element => {
//         if (element === 'keys') {
//             console.log(inputArr.indexOf(element));
//         }
//     });
// };
