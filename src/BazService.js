// @flow
import { Service } from './Service';
import { FooService } from './FooService';
import { BarService } from './BarService';

type Env = {
  fooService: FooService,
  barService: BarService,
}

export class BazService extends Service<Env> {
  method = (): string => {
    return `baz: ${this.env.fooService.method2()} ${this.env.barService.method()}`;
  }
}
