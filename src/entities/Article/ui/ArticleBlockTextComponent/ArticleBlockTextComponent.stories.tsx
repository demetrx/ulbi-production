import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { ArticleBlockTextComponent } from './ArticleBlockTextComponent';

export default {
  title: 'entities/ArticleBlockTextComponent',
  component: ArticleBlockTextComponent,
  argTypes: {},
} as ComponentMeta<typeof ArticleBlockTextComponent>;

const Template: ComponentStory<typeof ArticleBlockTextComponent> = () => <ArticleBlockTextComponent />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
