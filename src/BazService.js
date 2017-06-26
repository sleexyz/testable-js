// @flow
import type { FooService } from './FooService';
import type { BarService } from './BarService';

export type BazService = {|
  method: () => string
|}

type Env = {
  fooService: FooService,
  barService: BarService,
}

export const makeBazService = (env: Env) => ({
  method: (): string => {
    return `baz: ${env.fooService.method2()} ${env.barService.method()}`;
  },
});
