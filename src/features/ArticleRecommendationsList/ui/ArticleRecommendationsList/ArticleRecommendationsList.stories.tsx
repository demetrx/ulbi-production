import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { articleMock } from '@/entities/Article/model/mocks/articleMock';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.parameters = {
  mockData: [
    {
      url: `${__API_URL__}/articles?_limit=3`,
      method: 'GET',
      status: 200,
      response: [
        { ...articleMock, id: '1' },
        { ...articleMock, id: '2' },
        { ...articleMock, id: '3' },
      ],
    },
  ],
};
