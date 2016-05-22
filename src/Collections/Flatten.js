/**
 * Returns a new array that is flattened or one-dimensional
 * @param   {Array}       collection      - The array to flatten
 * @returns {Array}                       - The new flattened array
 */
let flatten = collection => {

    var out = [];

    function _parse(n) {
        for(var val of n) {
            Array.isArray(val) ? _parse(val) : out.push(val);
        }
    };

    _parse(collection);

    return out;
};

export default flatten;
