// @flow
export type FooService = {|
  method1: () => string,
  method2: () => string
|}

export const makeFooService: * => FooService = () => ({
  method1: (): string => {
    return 'hello';
  },
  method2: (): string => {
    return 'world';
  },
});
