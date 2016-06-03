import { assert } from 'chai';
import * as decorators from '../example08/decorators';

describe('example08', () => {
  it('should seal class', () => {
    assert.isTrue(Object.isSealed(decorators.SHA1CryptoServiceProvider));
    assert.isTrue(Object.isSealed(decorators.SHA256CryptoServiceProvider));
    assert.isFalse(Object.isSealed(decorators.SHA2CryptoServiceProvider));
  });
});
