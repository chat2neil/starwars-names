var expect = require('chai').expect;
var starwarsNames = require('./index');

describe('starwars-names', function () {
    
    describe('all', function () {
        it('should return an array of strings', function () {
            expect(starwarsNames.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item == "string";
                });
            }
        });

        it('should contain Neil Tucker in the list', function() {
            expect(starwarsNames.all).to.include('Neil Tucker');
        });
    });
 
    describe('random', function () {
        it('should return an random item from .all', function () {
            var item = starwarsNames.random();
            expect(starwarsNames.all).to.contain(item);
        });
    });

});