import concat from '../../src/collections/concat';

describe("concat", () => {

    it("does concatenate two arrays", () => {

        var a = [65, 44];
        var b = [22, 26];

        let result = concat(1,2);

        expect(result).toEqual([1,2]);
    });


    //it("does concatenate three arrays", () => {
    //
    //    var a = [65, 44, 12, 4];
    //    var b = [22, 26, 8, 43];
    //    var c = [5];
    //
    //    let result = concat(a, [b,c]);
    //
    //    expect(result).toEqual([65, 44, 12, 4, 22, 26, 8, 43, 5]);
    //});

});