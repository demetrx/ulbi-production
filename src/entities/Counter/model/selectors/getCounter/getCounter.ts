import { StateSchema } from '@/app/providers/store';
import { buildSelector } from '@/shared/store';

export const [useCounterValue, getCounterValue] = buildSelector(
  (state: StateSchema) => state.counter,
);
