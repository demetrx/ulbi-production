import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const WithTitleAndText = Template.bind({});
WithTitleAndText.args = {
  title: 'Title title title',
  text: 'Text text text text text text text',
};

export const WithTitleAndTextDark = Template.bind({});
WithTitleAndTextDark.args = {
  title: 'Title title title',
  text: 'Text text text text text text text',
};
WithTitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Title title title',
};

export const WithTitleDark = Template.bind({});
WithTitleDark.args = {
  title: 'Title title title',
};
WithTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithText = Template.bind({});
WithText.args = {
  text: 'Text text text text text text text',
};

export const WithTextDark = Template.bind({});
WithTextDark.args = {
  text: 'Text text text text text text text',
};
WithTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Error name',
  text: 'Error error error error error error',
  theme: TextTheme.Error,
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Error name',
  text: 'Error error error error error error',
  size: TextSize.M,
};
