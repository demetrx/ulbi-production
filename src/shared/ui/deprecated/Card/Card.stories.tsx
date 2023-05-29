import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '@/shared/ui';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text title="Test title" text="Test text" />,
};
