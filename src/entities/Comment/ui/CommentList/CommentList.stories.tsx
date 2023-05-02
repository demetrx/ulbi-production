import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      user: { id: '1', username: 'Broski' },
      text: 'Suppa comment 228',
    },
    {
      id: '2',
      user: { id: '2', username: 'CJ' },
      text: 'Ahh shit, here we go again!',
    },
  ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  comments: [],
  isLoading: true,
};
