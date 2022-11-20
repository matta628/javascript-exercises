//oldest at death/present ?..
const findTheOldest = function(people) {
    let thisYear = (new Date).getFullYear();
    people = people.map(person => {
        if (person.yearOfDeath === undefined){
            person.yearOfDeath = thisYear;
        }
        return person;            
    });
    const oldest = people.reduce((accumulator, current) => {
        if ((current.yearOfDeath-current.yearOfBirth) > (accumulator.yearOfDeath -accumulator.yearOfBirth)){
            accumulator = current;
        }
        return accumulator;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
