import { expect } from 'chai';
import { get } from 'helpers/env';

describe('env helpers', () => {
  it('fallbacks to empty string', () => {
    expect(get('inexistent')).to.eql('');
  });

  it('fetches env variables', () => {
    expect(get('NODE_ENV')).to.eql('test');
  });

  it('allows to set a fallback', () => {
    expect(get('inexistent', 10)).to.eql(10);
  });
});
