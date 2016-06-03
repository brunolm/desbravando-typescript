import { assert } from 'chai';
import { test, createName } from '../example05/interfaces';

describe.skip('example05', () => {
  it('should return clientId', () => {
    const result = test({
      realmId: 1,
      clientId: 1,
      clientSecret: '123',
    });

    assert.equal(result, 1);
  });

  it('should create a name', () => {
    const name1 = createName('Bruno Michels');
    const name2 = createName(['Bruno', 'Michels']);

    assert.equal(name1, name2);
  });
});
