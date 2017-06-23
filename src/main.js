// @flow

import { mkFooService } from './foo_service';
import { mkBarService } from './bar_service';
import { mkBazService } from './baz_service';

type MkEnvInput = {
  mockServices: {},
};

export const mkEnv = ({ mockServices }: MkEnvInput) => {
  const services = { ...mockServices };
  if (services.fooService == null) {
    services.fooService = mkFooService({ services });
  }
  if (services.barService == null) {
    services.barService = mkBarService({ services });
  }
  if (services.bazService == null) {
    services.bazService = mkBazService({ services });
  }
  return { services };
};
