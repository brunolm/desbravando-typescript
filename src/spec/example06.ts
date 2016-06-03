import { assert } from 'chai';
import { Direction, FileFlags } from '../example06/enums';

describe.skip('example06', () => {
  it('should return direction values', () => {
    assert.equal(0, Direction.Up);
    assert.equal(1, Direction.Down);
    assert.equal(2, Direction.Left);
    assert.equal(3, Direction.Right);
  });

  it('should return direction text values', () => {
    assert.equal('Up', Direction[Direction.Up]);
    assert.equal('Down', Direction[Direction.Down]);
    assert.equal('Left', Direction[Direction.Left]);
    assert.equal('Right', Direction[Direction.Right]);
  });

  it('should return file flags values', () => {
    assert.equal(2, FileFlags.ReadOnly);
    assert.equal(4, FileFlags.Hidden);
    assert.equal(8, FileFlags.Compressed);
    assert.equal(16, FileFlags.System);
  });
});
