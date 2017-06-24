// @flow

import { FooService } from './foo_service';
import { BarService } from './bar_service';
import { BazService } from './baz_service';

type MockEnv = { [serviceName: string]: { [functionName: string]: * } }

export const makeEnv = (mockEnv?: MockEnv) => {
  const env = { ...mockEnv };
  if (env.fooService == null) {
    env.fooService = new FooService(env);
  }
  if (env.barService == null) {
    env.barService = new BarService(env);
  }
  if (env.bazService == null) {
    env.bazService = new BazService(env);
  }
  return env;
};
