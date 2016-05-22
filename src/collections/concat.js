/**
 * Returns a new array comprised of the array's parsed in
 * @param target
 * @param collection
 * @returns {Array}
 */
export function concat() {

  var   args = arguments,
        out = [];

  var parseArray = a => {
      for(var v of a) {
          out.push(v);
      }
  };

  for(var a of args) {
      Array.isArray(a) ? parseArray(a) : out.push(a);
  }

  return out;
};
