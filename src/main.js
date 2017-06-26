// @flow

import { makeFooService } from './FooService';
import { makeBarService } from './BarService';
import { makeBazService } from './BazService';

type Env = {
  [serviceName: string]: {
    [functionName: string]: *,
  },
};

export const makeEnv = (mockEnv?: Env) => {
  const env = { ...mockEnv };
  env.fooService = env.fooService || makeFooService(env);
  env.barService = env.barService || makeBarService(env);
  env.bazService = env.bazService || makeBazService(env);
  return env;
};
