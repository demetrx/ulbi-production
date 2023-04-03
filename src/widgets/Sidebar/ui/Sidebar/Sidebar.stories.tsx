import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

const state = { user: { authData: {} } };
export const Light = Template.bind({});
Light.decorators = [StoreDecorator(state)];
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(state)];

export const NotAuth = Template.bind({});
NotAuth.decorators = [StoreDecorator({ user: {} })];
