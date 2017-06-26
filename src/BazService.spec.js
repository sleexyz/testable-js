// @flow
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { makeEnv } from './main';
import { makeBarService } from './BarService.mock';
import type { FooService } from './FooService';
import type { BarService } from './BarService';
import type { BazService } from './BazService';

class TestTree<S: {}, T: S> {
  beforeEach: (Class<S>) => Class<T>
  subTests: Array<TestTree<T>>
  constructor(input: {
    beforeEach: (Class<S>) => Class<T>,
    subTests?: Array<TestTree<S, T>>,
  }) {
    this.beforeEach = input.beforeEach;
    if (input.subTests != null) {
      this.subTests = input.subTests;
    } else {
      this.subTests = [];
    }
  }
  run(): void {
    class Foo {}
    return this.runWith(Foo);
  }
  runWith(c): void {
    if (this.subTests.length == 0) {
      new (this.beforeEach(c))();
    } else {
      for (let i = 0; i < this.subTests.length; i += 1) {
        this.subTests[i].runWith(this.beforeEach(c));
      }
    }
  }
}

const foo = new TestTree({
  beforeEach: (Ctx) => class BazServiceTest extends Ctx {
    fooService: FooService
    barService: BarService
    bazService: BazService
    constructor() {
      super();
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
  },
  subTests: [
    new TestTree({
      beforeEach: (Ctx) => class MethodTest extends Ctx {
        result: string;
        constructor() {
          super();
          this.result = this.bazService.method();
        }
      },
      /* subTests: [
       *   new TestTree({
       *     beforeEach: (Ctx) => class Test extends Ctx {
       *       constructor() {
       *         super();
       *         it('correctly appends the two expressions', () => {
       *           expect(this.result).to.eql('baz: 2 bar-test');
       *         });
       *       }
       *     },
       *   }),
       * ],*/
    }),
  ],
});
foo.run();

/* describe('BazService', () => {
 *   class BazServiceTest {
 *     fooService: FooService
 *     barService: BarService
 *     bazService: BazService
 *     constructor() {
 *       this.fooService = {
 *         method1: sinon.stub(),
 *         method2: sinon.stub().returns('2'),
 *       };
 *       this.barService = makeBarService();
 *       const mockEnv = {
 *         fooService: this.fooService,
 *         barService: this.barService,
 *       };
 *       const env = makeEnv(mockEnv);
 *       this.bazService = env.bazService;
 *     }
 *   }
 *
 *   describe('method', () => {
 *     class MethodTest extends BazServiceTest {
 *       result: string
 *       constructor() {
 *         super();
 *         this.result = this.bazService.method();
 *       }
 *     }
 *
 *     it('appends text properly', function () {
 *       expect(this.result).to.eql('baz: 2 bar-test');
 *     }.bind(new MethodTest()));
 *
 *     it('calls fooService.method2 once', function () {
 *       expect(this.fooService.method2.callCount).to.eql(1);
 *     }.bind(new MethodTest()));
 *
 *     it('calls barService.method once', function () {
 *       expect(this.barService.method.callCount).to.eql(1);
 *     }.bind(new MethodTest()));
 *
 *   });
 *
 * });*/
