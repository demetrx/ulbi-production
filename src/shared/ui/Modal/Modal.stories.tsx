import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import React from 'react';
import { Modal } from 'shared/ui';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {},
  args: {
    children: 'Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
    isOpen: true,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//   isOpen: true,
// };
export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
//   children: 'Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
// };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
