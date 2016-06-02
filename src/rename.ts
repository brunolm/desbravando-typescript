(function () {

  function sortByName(arr: { name: string }[]) {
    const result = arr.slice(0);
    result.sort(function(x, y) {
      const name = 'abc';
      return x.name.localCompare(y.name);
    });
    return result;
  }

  sortByName([ 'b', 'r', 'u', 'n', 'o' ]);

}());
