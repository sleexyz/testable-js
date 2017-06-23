// @flow

import type { FooService } from './foo_service';
import type { BarService } from './bar_service';

export type BazService = {
  method: () => string,
};

export const mkBazService = (env: {
  services: {
    fooService: FooService,
    barService: BarService,
  },
}): BazService => {
  const {
    fooService,
    barService,
  } = env.services;

  return {
    method: () => fooService.method2() + barService.method(),
  };
};
