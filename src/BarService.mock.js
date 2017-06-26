// @flow
import sinon from 'sinon';
import type { BarService } from './BarService';

export const makeBarService = (): BarService => ({
  method: sinon.stub().returns('bar-test'),
});
