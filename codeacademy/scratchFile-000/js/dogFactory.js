const dogFactory = (name, breed, weight) => {
    if (typeof weight !== "number" || typeof name !== "string") {
        console.log('Check you input information in the correct format.')
    }

    console.log(`Your dog is named ${name}, is a ${breed} and weights ${weight} kg/kg's.`);

    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name () {
            return this._name;
        },
        get breed () {
            return this._breed;
        },
        get weight () {
            return this._weight;
        },
        set name (setName) {
            return this._name = setName;
        },
        set breed (setBreed) {
            return this._breed = setBreed;
        },
        set weight (setWeight) {
            return this._weight = setWeight;
        },
        bark () {
            return 'ruff! ruff!'
        },
        eatTooManyTreats () {
            return this._weight += 1;
        }

    }
};

//console.log(dogFactory("Bruce", "Hound", 1));
// dogFactory("Bruce", "Hound", 1);

let newDog = dogFactory("Bruce", "Hound", 1);
console.log(`${newDog.name} says ${newDog.bark()}.
${newDog.name} eats a treat, he now weighs ${newDog.eatTooManyTreats()} kg's`);