// @flow
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { makeEnv } from './main';
import { BarServiceMock } from './BarService';

describe('BazService', () => {
  describe('method', () => {
    it('works', () => {
      const env = {
        barService: new BarServiceMock(),
        fooService: {
          method2: sinon.stub().returns('2'),
        },
      };
      const { bazService } = makeEnv(env);
      expect(bazService.method()).to.eql('baz: 2 bar-test');
    });
  });
});
