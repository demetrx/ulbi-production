import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>
/**
 * Use new components from "redesigned" folder
 * @deprecated
 */
export const HStack = (props: HStackProps) => (
  <Flex direction="row" {...props} />
);
