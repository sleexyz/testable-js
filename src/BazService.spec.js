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
    class BazServiceTest {
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

    it('appends text properly', function () {
      expect(this.bazService.method()).to.eql('baz: 2 bar-test');
    }.bind(new BazServiceTest()));

    it('calls fooService.method2 once', function () {
      this.bazService.method();
      expect(this.fooService.method2.callCount).to.eql(1);
    }.bind(new BazServiceTest()));

    it('calls barService.method once', function () {
      this.bazService.method();
      expect(this.barService.method.callCount).to.eql(1);
    }.bind(new BazServiceTest()));
  });
});
