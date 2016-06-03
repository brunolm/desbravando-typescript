import { assert } from 'chai';
import { countLines } from '../example01/test01';

describe.skip('countLines JavaScript', () => {
  it('should return 3', () => {
    const result = countLines(['one', 'two', '', 'three']);
    assert.equal(result, 3);
  });

  it('should return 2', () => {
    const result = countLines(['hello', null, 'world']);
    assert.equal(result, 2);
  });

  it('should return 1', () => {
    const result = countLines(['hello', Date, .1337, 0xb2]);
    assert.equal(result, 1);
  });

  it('should return 0', () => {
    const result = countLines();
    assert.equal(result, 0);
  });
});
