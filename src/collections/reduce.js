/**
 * Called for every iteration
 * @name reduce~iterator
 * @function
 * @param   {*}         accumulator     - The accumulation value
 * @param   {*}         value           - The value of the iteration item
 * @param   {Number}    index           - The current iteration index
 */

/**
 * Reduces a collection down to a single value
 * @param {Array}                   collection          - The collection to reduce
 * @param {reduce~iterator}         iterator            - The iterating function
 * @param {*}                       [initialValue]      - The initial value, if not supplied the first value of the collection will be used
 * @returns {*}                                         - The accumulated result
 */
var reduce = (collection, iterator, initialValue) => {

    if(!Array.isArray(collection) && typeof collection !== 'string') {
        return;
    }

    var accumulator = initialValue;

    for(var i=0; i<collection.length; i++) {

        // If initial value was not defined, use the first value from the collection
        if(i === 0 && typeof accumulator === 'undefined') {
            accumulator = collection[i];
            continue;
        }

        accumulator = iterator(accumulator, collection[i], i);
    }

    return accumulator;

};

export default reduce;