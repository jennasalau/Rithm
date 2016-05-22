import {debounce} from '../../src/utils/debounce';

describe("it debounces", function(){


    it("should debounce", function (done) {

        var test = 0,
            itterations = 0,
            result,
            eventHandler = function(i) {
                test++;
                result = i;
            },
            runner = debounce(eventHandler, 100);

        for(var i=0; i < 100; i++){
            runner(i);
            itterations++;
        }

        window.setTimeout(function(){
            expect(test).toBe(1);
            expect(itterations).toBe(100);
            expect(result).toBe(99);

            done();
        }, 1000);

    });



    it("should debounce multiple instances", function (done) {

        var test = 0,
            test2 = 0,
            itterations = 0,
            itterations2 = 0,
            result,
            result2,
            eventHandler = function(i) {
                test++;
                result = i;
            },
            eventHandler2 = function(i) {
                test2++;
                result2 = i;
            },
            runner = debounce(eventHandler, 100),
            runner2 = debounce(eventHandler2, 50);;

            for(var i=0; i < 100; i++){

                runner(i);
                itterations++;

                if(i<20){
                    runner2(i);
                    itterations2++;
                }
            }

        window.setTimeout(function(){
            expect(test).toBe(1);
            expect(itterations).toBe(100);
            expect(result).toBe(99);

            expect(test2).toBe(1);
            expect(itterations2).toBe(20);
            expect(result2).toBe(19);

            done();
        }, 200);

    });


});
