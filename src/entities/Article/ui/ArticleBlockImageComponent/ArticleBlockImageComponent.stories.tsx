import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { ArticleBlockImageComponent } from './ArticleBlockImageComponent';

export default {
  title: 'entities/ArticleBlockImageComponent',
  component: ArticleBlockImageComponent,
  argTypes: {},
} as ComponentMeta<typeof ArticleBlockImageComponent>;

const Template: ComponentStory<typeof ArticleBlockImageComponent> = () => <ArticleBlockImageComponent />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
