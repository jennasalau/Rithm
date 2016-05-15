/**
 * Returns a new array that is flattened or one-dimensional
 * @param   {Array}       collection      - The array to flatten
 * @returns {Array}                       - The new flattened array
 */
let flatten = collection => {

    // Check object can be iterated
    if(!Array.isArray(collection)) {
        return null;
    }

    var result = [];

    function _parse(n) {

        if(!Array.isArray(n)){
            return;
        }

        for(var val of n) {

            if(Array.isArray(val)) {
                _parse(val);
            }
            else {
                result.push(val);
            }
        }
    };

    _parse(collection);

    return result;
};

export default flatten;