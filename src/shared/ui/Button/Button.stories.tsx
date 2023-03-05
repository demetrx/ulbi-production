import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};
export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINED,
};
export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
