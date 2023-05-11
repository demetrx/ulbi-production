import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { NavBar } from './NavBar';

export default {
  title: 'widgets/Navbar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Authenticated = Template.bind({});
Authenticated.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];
