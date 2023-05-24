import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags = {};

export function setFeatureFlags(flags?: FeatureFlags) {
  if (!flags) return;

  featureFlags = flags;
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}
