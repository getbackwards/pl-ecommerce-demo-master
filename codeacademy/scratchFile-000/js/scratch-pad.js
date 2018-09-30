const story = "Last weekend, I took literally the most beautiful bike ride of my life.";
// console.log('Test console log.');
const regex = /,/gi;
//console.log(regex);

const string_to_array = function (str) {
    return str.trim().split(" ");
};
// console.log(string_to_array.replace(regex, 'ferret,'));
console.log(story.replace(regex, ''));
// console.log(string_to_array("Last weekend, I took literally the most beautiful bike ride of my life wow."));
