// @flow
import { Service } from './service';
import { FooService } from './foo_service';
import { BarService } from './bar_service';

export class BazService extends Service<{
  fooService: FooService,
  barService: BarService,
}> {
  method = (): string => {
    return `baz: ${this.env.fooService.method2()} ${this.env.barService.method()}`;
  }
}
