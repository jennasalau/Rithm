import flatten from '../../src/Collections/flatten';


describe("Flatten", function() {


    it("does flatten simple", function() {
        let test = [1,2,3];
        let result = flatten(test);

        expect(result).toEqual([1,2,3]);
    });


    it("does flatten with single array", function() {
        let test = [1,2,3,[4,5]];
        let result = flatten(test);

        expect(result).toEqual([1,2,3,4,5]);
    });

    it("does flatten two arrays", function() {
        let test = [1,2,3,[4,5],[6,7]];
        let result = flatten(test);

        expect(result).toEqual([1,2,3,4,5,6,7]);
    });

    it("does flatten deep array", function() {
        let test = [1,2,3,[4,5,[6,7]]];
        let result = flatten(test);

        expect(result).toEqual([1,2,3,4,5,6,7]);
    });

    it("does flatten two deep arrays", function() {
        let test = [1,2,3,[4,5,[6,7]],[8,[9,10]]];
        let result = flatten(test);

        expect(result).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it("does flatten mixed values", function() {
        let test = [1,'2',{three: 3}, [4]];
        let result = flatten(test);

        expect(result).toEqual([1,'2',{three: 3},4]);
    });

});