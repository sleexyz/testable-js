// @flow
import type { FooService } from './foo_service';

export type BarService = {
  method: () => string,
};

export const mkBarService = (env: {
  services: {
    fooService: FooService,
  }
}): BarService => {
  const {
    fooService,
  } = env.services;
  return {
    method: () => fooService.method1(),
  };
};
