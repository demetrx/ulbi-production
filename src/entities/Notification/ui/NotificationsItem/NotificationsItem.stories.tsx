import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { NotificationsItem } from './NotificationsItem';

export default {
  title: 'entities/Notification/NotificationsItem',
  component: NotificationsItem,
  argTypes: {},
} as ComponentMeta<typeof NotificationsItem>;

const Template: ComponentStory<typeof NotificationsItem> = (args) => <NotificationsItem {...args} />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
