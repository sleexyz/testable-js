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

  describe('method', () => {
    class MethodTest extends BazServiceTest {
      result: string
      constructor() {
        super();
        this.result = this.bazService.method();
      }
    }

    it('appends text properly', function () {
      expect(this.result).to.eql('baz: 2 bar-test');
    }.bind(new MethodTest()));

    it('calls fooService.method2 once', function () {
      expect(this.fooService.method2.callCount).to.eql(1);
    }.bind(new MethodTest()));

    it('calls barService.method once', function () {
      expect(this.barService.method.callCount).to.eql(1);
    }.bind(new MethodTest()));

  });

});
