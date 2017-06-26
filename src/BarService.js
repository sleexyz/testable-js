// @flow
import type { FooService } from './FooService';

export type BarService = {|
  method: () => string,
|}

type Env = {
  fooService: FooService,
}

export const makeBarService = (env: Env): BarService => ({
  method: () => {
    return env.fooService.method1();
  },
});
