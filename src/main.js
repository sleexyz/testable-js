// @flow

import { FooService } from './FooService';
import { BarService } from './BarService';
import { BazService } from './BazService';
import type { $Env } from './Service';

export const makeEnv = (mockEnv?: $Env) => {
  const env = { ...mockEnv };
  env.fooService = env.fooService || new FooService(env);
  env.barService = env.barService || new BarService(env);
  env.bazService = env.bazService || new BazService(env);
  return env;
};
