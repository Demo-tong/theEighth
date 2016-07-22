function collect_all_even(collection) {
  var outArray = [];

  for (var i = 0; i < collection.length; ++i) {
    if (collection[i] % 2 === 0) {
      outArray.push(collection[i]);
    }
  }

  return outArray;
}
"output"

module.exports = collect_all_even;
