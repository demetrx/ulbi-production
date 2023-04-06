import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { ArticleBlockCodeComponent } from './ArticleBlockCodeComponent';

export default {
  title: 'entities/ArticleBlockCodeComponent',
  component: ArticleBlockCodeComponent,
  argTypes: {},
} as ComponentMeta<typeof ArticleBlockCodeComponent>;

const Template: ComponentStory<typeof ArticleBlockCodeComponent> = () => <ArticleBlockCodeComponent />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
