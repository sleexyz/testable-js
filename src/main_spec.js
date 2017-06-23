// @flow

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mkEnv } from './main';

describe('mkEnv', () => {
  it('works', () => {
    const mockServices = {
      fooService: {
        method1: () => '1',
        method2: () => '2',
      },
    };
    const env = mkEnv({ mockServices });
    const { bazService } = env.services;
    expect(bazService.method()).to.eql('21');
  });
});
