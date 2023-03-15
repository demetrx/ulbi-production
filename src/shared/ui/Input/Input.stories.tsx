import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
  placeholder: 'Type text',
  value: '123123',
};
export const Dark = Template.bind({});
Dark.args = {
  placeholder: 'Type text',
  value: '123123',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
