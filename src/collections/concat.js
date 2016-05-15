/**
 * Returns a new array comprised of the array's parsed in
 * @param target
 * @param collection
 * @returns {*}
 */
const concat = (array) => {


    var result = [];

     var _copyValues = (innerArray) => {

        for(var x=0; x<innerArray.length;x++) {
            result.push(innerArray[x]);
        }

    };



    for(var i=0; i < arguments.length; i++) {

        // Skip browserify cruft
       if(typeof arguments[i] === 'object' || arguments[i].exports || arguments[i].__esModule) {
        continue;
       }

        if(Array.isArray(arguments[i])) {
            _copyValues(arguments[i]);

        } else {
            result.push(arguments[i]);
        }

    }



    return result;
};

export default concat;