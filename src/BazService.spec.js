// @flow
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { makeEnv } from './main';

describe('BazService', () => {
  describe('method', () => {
    it('works', () => {
      const mockEnv = {
        fooService: {
          method2: sinon.stub().returns('2'),
        },
        barService: {
          method: sinon.stub().returns('1'),
        },
      };
      const { bazService } = makeEnv(mockEnv);
      expect(bazService.method()).to.eql('baz: 2 1');
    });
  });
});
