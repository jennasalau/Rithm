import reduce from '../../src/Collections/reduce';


describe("reduce", () => {

    it("does reduce array of numbers", () => {

        var numbers = [65, 44, 12, 4];

        let result = reduce(numbers, (total, val) => {
            return total + val;
        });


        expect(result).toEqual(125);
    });


    it("does reduce array of objects", () => {

        var numbers = [{n:65}, {n:44}, {n:12}, {n:4}];

        let result = reduce(numbers, (total, val) => {
            return total + val.n;
        }, 0);

        expect(result).toEqual(125);
    });


    it("does reduce string", () => {

        var str = 'abc';

        let result = reduce(str, (total, val) => {
            return total + val + 'z';
        },'');

        expect(result).toEqual('azbzcz');
    });




});