// @flow

type Env = {
  [serviceName: string]: *;
}

export class Service<$Env> {
  env: $Env;
  constructor(env: $Env) {
    this.env = env;
  }
}

const makeInstanceName = (className: string): string => {
  return className[0].toLowerCase() + className.slice(1);
};

export class ServiceRegistry {
  classes: {
    [className: string]: Class<*>
  } = {};
  register = (c: Class<*>) => {
    const className = makeInstanceName(c.name);
    this.classes[className] = c;
  }
  makeEnv = (mockEnv: Env): Env => {
    const env = { ...mockEnv };
    const classNames = Object.keys(this.classes);
    for (let i = 0; i < classNames.length; i += 1) {
      const className = classNames[i];
      if (env[className] == null) {
        const C = this.classes[className];
        env[className] = new C(env);
      }
    }
    return env;
  }
}

const GlobalServiceRegistry = new ServiceRegistry();
export const registerService = GlobalServiceRegistry.register;
export const makeEnv = GlobalServiceRegistry.makeEnv;
