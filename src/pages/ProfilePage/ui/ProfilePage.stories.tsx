import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      firstName: 'Dmytro',
      lastName: 'Bielousov',
      age: 20,
      currency: Currency.UAH,
      country: Country.Ukraine,
      city: 'Kyiv',
      username: 'admin',
      avatar,
    },
  },
})];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      firstName: 'Dmytro',
      lastName: 'Bielousov',
      age: 20,
      currency: Currency.UAH,
      country: Country.Ukraine,
      city: 'Kyiv',
      username: 'admin',
      avatar,
    },
  },
})];
