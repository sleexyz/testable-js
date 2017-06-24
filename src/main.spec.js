// @flow

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { makeEnv } from './main';

describe('makeEnv', () => {
  it('works', () => {
    const env = makeEnv();
    expect(env.bazService.method()).to.eql('baz: world hello');
  });
});
