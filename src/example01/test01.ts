export function countLines(text) {
  let count = 0;

  for (const line of text) {
    if (line.length !== 0) {
      count = count + 1;
    }
  }

  return count;
}
