// @flow
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { makeEnv } from './main';
import { BarServiceMock } from './BarService';

describe('BazService', () => {
  describe('method', () => {
    it('works', () => {
      const mockedEnv = {
        barService: new BarServiceMock(),
        fooService: {
          method2: sinon.stub().returns('2'),
        },
      };
      const env = makeEnv(mockedEnv);
      expect(env.bazService.method()).to.eql('baz: 2 bar-test');
    });
  });
});
