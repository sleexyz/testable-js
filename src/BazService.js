// @flow
import { Service } from './Service';
import { FooService } from './FooService';
import { BarService } from './BarService';

export class BazService extends Service<{
  fooService: FooService,
  barService: BarService,
}> {
  method = (): string => {
    return `baz: ${this.env.fooService.method2()} ${this.env.barService.method()}`;
  }
}
