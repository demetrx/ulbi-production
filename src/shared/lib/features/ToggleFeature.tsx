import { ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeatureProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeature = (props: ToggleFeatureProps) => {
  const { feature, on, off } = props;
  const isEnabled = getFeatureFlag(feature);

  if (isEnabled) {
    return on;
  }

  return off;
};
