import {concat} from '../../src/collections/concat';

describe("concat", () => {

    it("does concatenate two arrays", () => {

        var a = [65, 44];
        var b = [22, 26];

        let result = concat(a,b);

        expect(result).toEqual([65,44,22,26]);
    });

});
