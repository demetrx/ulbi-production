import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123' },
})];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: 'admin', password: '123' },
})];

export const WithError = Template.bind({});
WithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: 'admin', password: '123', error: 'Error' },
})];

export const Loading = Template.bind({});
Loading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: 'admin', password: '123', isLoading: true },
})];
