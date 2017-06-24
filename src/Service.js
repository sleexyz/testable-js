// @flow

export class Service<Env> {
  env: Env;
  constructor(env: Env) {
    this.env = env;
  }
}
