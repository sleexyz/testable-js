// @flow
import { FooService } from './FooService';
import { Service } from './Service';

type Env = {
  fooService: FooService,
}
export class BarService extends Service<Env> {
  method = (): string => {
    return this.env.fooService.method1();
  }
}
