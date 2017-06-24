// @flow
import { FooService } from './FooService';
import { Service } from './Service';

export class BarService extends Service<{
  fooService: FooService,
}> {
  method = (): string => {
    return this.env.fooService.method1();
  }
}
