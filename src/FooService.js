// @flow

import { Service } from './Service';

export class FooService extends Service {
  method1 = (): string => {
    return 'hello';
  }
  method2 = (): string => {
    return 'world';
  }
}
