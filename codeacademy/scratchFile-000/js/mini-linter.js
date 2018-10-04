let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// let overusedWords = ['really', 'very', 'basically'];
// console.log(overusedWords);

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const regEx = /(\w+'\w+)|\w+|,|!|\./g;
const removeWhiteSpaceRegEx = /\s+(\W)/g;

const storyArray = story.match(regEx);
// console.log(storyArray);

const conciseStoryWords = storyArray.filter((wordFromStoryArray) => {
    return !unnecessaryWords.find((wordFromUnnecessaryWords) => {
        return wordFromStoryArray === wordFromUnnecessaryWords
    })
});

const conciseStory = conciseStoryWords.join(" ");
const betterWords = conciseStory.replace(removeWhiteSpaceRegEx, "$1");

const countInArray = (array, what) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
};

const overUsedWordCount = () => {
    const timesBasicallyUsed = countInArray(storyArray, 'basically');
    const timesReallyUsed = countInArray(storyArray, 'really');
    const timesVeryUsed = countInArray(storyArray, 'very');
    return `occurrences of overused words, "really" appears ${timesReallyUsed} times, "very" appears ${timesVeryUsed} times and "basically" appears ${timesBasicallyUsed}`;
};
overUsedWordCount();

const numberOfSentences = betterWords.replace(/[^.!]/g, "").length;

Array.prototype.remove = function (target) {
    this.splice(this.indexOf(target), 1);
    return this;
};

const storyArrayWordCount = () => {
    for (let q = 0; q < storyArray.length; q++) {

        if (storyArray[q] === "!") {
            storyArray.remove(storyArray[q]);
        }

        if (storyArray[q] === ".") {
            storyArray.remove(storyArray[q]);
        }

        if (storyArray[q] === ",") {
            storyArray.remove(storyArray[q]);
        }
    }
    return storyArray.length;
};

console.log(`You text has ${storyArrayWordCount()} words in ${numberOfSentences} paragraphs. You have ${overUsedWordCount()} time.`);
console.log(betterWords);