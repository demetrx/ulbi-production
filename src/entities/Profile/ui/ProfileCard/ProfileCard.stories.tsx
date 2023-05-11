import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    firstName: 'Dmytro',
    lastName: 'Bielousov',
    age: 20,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: 'Kyiv',
    username: 'admin',
    avatar,
    // avatar: 'https://media.licdn.com/dms/image/C4E03AQFkm84SuxyPTw/profile-displayphoto-shrink_800_800/0/1657872278941?e=1684972800&v=beta&t=bCNt47AhvEN0BJXwqfLmTllAbwJXeySC3S0bBnR02EA',
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
