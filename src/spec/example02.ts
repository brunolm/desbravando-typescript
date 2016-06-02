import { assert } from 'chai';
import { wait } from '../example02';

describe('wait', () => {
  xit('should wait at least 2 seconds', async () => {
    const now = new Date().getTime();
    const in2secs = now + 2000;

    await wait(2000);

    assert.isAtLeast(new Date().getTime(), in2secs);
  });
});
