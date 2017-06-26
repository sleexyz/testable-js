// @flow
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { makeEnv } from './main';
import { makeBarService } from './BarService.mock';
import type { FooService } from './FooService';
import type { BarService } from './BarService';
import type { BazService } from './BazService';

describe('BazService', () => {
  describe('method', () => {
    class Test {
      fooService: FooService
      barService: BarService
      bazService: BazService
      constructor() {
        this.fooService = {
          method1: sinon.stub(),
          method2: sinon.stub().returns('2'),
        };
        this.barService = makeBarService();
        const mockEnv = {
          fooService: this.fooService,
          barService: this.barService,
        };
        const env = makeEnv(mockEnv);
        this.bazService = env.bazService;
      }
    }
    it('appends text properly', () => {
      const ctx = new Test();
      expect(ctx.bazService.method()).to.eql('baz: 2 bar-test');
    });
    it('calls fooService.method2 once', () => {
      const ctx = new Test();
      ctx.bazService.method();
      expect(ctx.fooService.method2.callCount).to.eql(1);
    });
    it('calls barService.method once', () => {
      const ctx = new Test();
      ctx.bazService.method();
      expect(ctx.barService.method.callCount).to.eql(1);
    });
  });
});
