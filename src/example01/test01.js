function countLines(text) {
  let count = 0;

  for (const line of text) {
    if (line.length !== 0) {
      count = count + 1;
    }
  }

  return count;
}

countLines(['one', 'two', '', 'three']);
countLines(['hello', null, 'world']);
countLines(['hello', null, Date, .1337, 0xb2]);
countLines(Function);
countLines(undefined);
countLines([1, 2, 1337]);
countLines();
