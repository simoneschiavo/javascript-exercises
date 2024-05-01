const findTheOldest = function(people) {
    const oldestArr = people.sort((lastPerson, nextPerson) => {
        const lastPersonAge = getPersonAge(lastPerson);
        const nextPersonAge = getPersonAge(nextPerson);
        return lastPersonAge > nextPersonAge ? -1 : 1;
    });
    return oldestArr[0];
};

const getPersonAge = function(person) {
    if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
    };
    return person.yearOfDeath - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
