import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      value: 'tab1',
      content: 'tab 1 content',
    },
    {
      value: 'tab2',
      content: 'tab 2 content',
    },
    {
      value: 'tab3',
      content: 'tab 3 content',
    },
  ],
  value: 'tab2',
  onTabClick: action('onTabClick'),
};
