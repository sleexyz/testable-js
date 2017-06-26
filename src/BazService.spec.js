// @flow
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { makeEnv } from './Service';
import { BarServiceMock } from './BarService';
import { BazService } from './BazService';

describe('BazService', () => {
  describe('method', () => {
    it('works', () => {
      // The issue with this registry is that we cannot statically verify that our mocks
      // typecheck
      const mockEnv = {
        barService: new BarServiceMock(),
        fooService: {
          method1: sinon.stub().returns('2'),
        },
      };
      type Env = {
        bazService: BazService
      } & typeof mockEnv;
      const env: Env = makeEnv(mockEnv);
      expect(env.bazService.method()).to.eql('baz: 2 bar-test');
      env.fooService.method1.returns('3');
      expect(env.fooService.method1).to.eql('2');
    });
  });
});
