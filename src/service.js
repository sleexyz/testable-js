// @flow

export class Service<Env> {
  env: Env;
  constructor(env: Env) {
    this.env = env;
  }
}

export const mockService = <S: {}>(_Service: Class<S>): S => {
  return new _Service();
};
