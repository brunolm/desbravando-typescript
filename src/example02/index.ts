export function wait(timeout: number) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      return resolve();
    }, timeout);
  });
}
