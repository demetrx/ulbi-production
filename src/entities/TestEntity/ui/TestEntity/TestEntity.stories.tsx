import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TestEntity } from './TestEntity';

export default {
  title: 'entities/TestEntity',
  component: TestEntity,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TestEntity>;

const Template: ComponentStory<typeof TestEntity> = (args) => <TestEntity {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
