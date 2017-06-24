// @flow
import { FooService } from './foo_service';
import { Service } from './service';

export class BarService extends Service<{
  fooService: FooService,
}> {
  method = (): string => {
    return this.env.fooService.method1();
  }
}
