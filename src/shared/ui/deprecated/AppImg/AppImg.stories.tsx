import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImg } from './AppImg';

export default {
  title: 'pages/AppImg',
  component: AppImg,
  argTypes: {},
} as ComponentMeta<typeof AppImg>;

const Template: ComponentStory<typeof AppImg> = (args) => <AppImg {...args} />;

export const Normal = Template.bind({});
