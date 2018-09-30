const story = "Last weekend, I took literally the most beautiful bike ride of my life.";
// console.log('Test console log.');

const regex = /[.,\s]/g;
// const regex = /[\s]/g;

//console.log(regex);

// const string_to_array = function (str) {
//     return str.trim().split(" ");
// };

// console.log(string_to_array.replace(regex, 'ferret,'));
console.log(story.split(regex));
// console.log(story.split());
// console.log(story);

// console.log(story.replace(regex, ''));

// console.log(string_to_array("Last weekend, I took literally the most beautiful bike ride of my life wow."));

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// console.log(unnecessaryWords.join(" "));
console.log(unnecessaryWords);