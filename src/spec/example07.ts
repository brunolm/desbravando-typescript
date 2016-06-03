import { assert } from 'chai';
import { ServiceUrls } from '../example07/namespaces';

describe('example07', () => {
  it('should get serviceUrls', () => {
    assert.equal('http://auth.microsoft.com/', ServiceUrls.oAuthService);
    assert.equal('http://data.microsoft.com/', ServiceUrls.dataService);
  });
});
