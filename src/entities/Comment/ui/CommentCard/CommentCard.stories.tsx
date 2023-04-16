import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    user: { id: '1', username: 'Broski' },
    text: 'Suppa comment 228',
  },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  comment: {
    id: '1',
    user: { id: '1', username: 'Broski' },
    text: 'Suppa comment 228',
  },
  isLoading: true,
};
