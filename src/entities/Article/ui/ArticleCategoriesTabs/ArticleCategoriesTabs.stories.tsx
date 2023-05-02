import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { ArticleCategoriesTabs } from './ArticleCategoriesTabs';

export default {
  title: 'entities/ArticleCategoriesTabs/ArticleCategoriesTabs',
  component: ArticleCategoriesTabs,
  argTypes: {},
} as ComponentMeta<typeof ArticleCategoriesTabs>;

const Template: ComponentStory<typeof ArticleCategoriesTabs> = (args) => <ArticleCategoriesTabs {...args} />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
