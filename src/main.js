// @flow

import { FooService } from './foo_service';
import { BarService } from './bar_service';
import { BazService } from './baz_service';

type MockEnv = { [serviceName: string]: { [functionName: string]: * } }

export const makeEnv = (mockEnv?: MockEnv) => {
  const env = { ...mockEnv };
  env.fooService = env.fooService || new FooService(env);
  env.barService = env.barService || new BarService(env);
  env.bazService = env.bazService || new BazService(env);
  return env;
};
