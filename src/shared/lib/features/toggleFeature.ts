import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '@/shared/lib/features/setGetFeatures';

interface ToggleFeatureOptions<Return> {
  name: keyof FeatureFlags
  on: () => Return
  off: () => Return
}

export function toggleFeature<Return>(options: ToggleFeatureOptions<Return>): Return {
  const { name, on, off } = options;
  const isEnabled = getFeatureFlag(name);

  if (isEnabled) {
    return on();
  }

  return off();
}
