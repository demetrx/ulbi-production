import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationsItem } from './NotificationsItem';

export default {
  title: 'entities/Notification/NotificationsItem',
  component: NotificationsItem,
  argTypes: {},
} as ComponentMeta<typeof NotificationsItem>;

const Template: ComponentStory<typeof NotificationsItem> = (args) => <NotificationsItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  item: {
    title: 'Notification', href: '', id: '1', description: 'description',
  },
};
