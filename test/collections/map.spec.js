import {map} from '../../src/collections/map';

describe("map", () => {

    it("does map collection", () => {

        var collection = [{name: 'arthor'}, {name: 'john'}, {name: 'susy'}];

        let result = map(collection, person => {
            return person.name;
        });

        expect(result).toEqual(['arthor','john','susy']);
    });

});
