// @flow

export type FooService = {
  method1: () => string,
  method2: () => string,
};

// eslint-disable-next-line no-unused-vars
export const mkFooService = (env: {}): FooService => {
  return {
    method1: () => 'hello',
    method2: () => 'world',
  };
};
