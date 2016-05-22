
export function map(collection, iterator) {

    var out = [];

    for(var obj of collection) {
        out.push(iterator(obj));
    }

    return out;
}
