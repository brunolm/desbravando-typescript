import { assert } from 'chai';
import { User } from '../example04/classes';

describe.skip('example04', () => {
  it('should create user', async () => {
    // const user = new User(); // error, parameter is not optional
    const user = new User('Bruno Michels');

    assert.isTrue(user instanceof User);
  });

  it('should say hello user', async () => {
    const user = new User('Bruno Michels');
    // const helloUser = `Hello ${user.name}!`; // error, name is private

    assert.equal(user.sayHello(), 'Hello Bruno Michels!');
  });

  it('should create hash', async () => {
    const user = new User('Bruno Michels');
    // user.hash // error, function is static

    assert.equal(User.createHash('Bruno'), 'onurB');
  });
});
