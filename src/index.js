var starwarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');
var randomStarwarsName = uniqueRandomArray(starwarsNames);

module.exports = {
    all: starwarsNames,
    random: randomStarwarsName
};
