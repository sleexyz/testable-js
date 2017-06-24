// @flow
import sinon from 'sinon';
import { FooService } from './FooService';
import { Service } from './Service';

export interface BarInterface {
  method(): string,
}

export class BarService extends Service<{
  fooService: FooService,
}> implements BarInterface {
  method = () => {
    return this.env.fooService.method1();
  }
}

export class BarServiceMock implements BarInterface {
  method = sinon.stub().returns('bar-test');
}
