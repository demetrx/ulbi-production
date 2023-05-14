import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationsList } from './NotificationsList';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationsList',
  component: NotificationsList,
  argTypes: {},
  decorators: [withMock, StoreDecorator({})],
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Normal = Template.bind({});
Normal.parameters = {
  mockData: [
    {
      url: `${__API_URL__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        { id: '1', title: 'Notification', description: 'Have a good day!' },
        { id: '2', title: 'Notification 2', description: 'Have a good day!' },
        { id: '3', title: 'Notification 3', description: 'Have a good day!' },
      ],
    },
  ],
};
