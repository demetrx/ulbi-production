import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Code } from './Code';

export default {
  title: 'pages/Code',
  component: Code,
  argTypes: {},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  code: 'import React from \'react\';\n'
    + 'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n'
    + 'import { ThemeDecorator } from \'shared/config/storybook/decorators/ThemeDecorator\';\n'
    + 'import { Theme } from \'app/providers/theme\';\n'
    + 'import { StoreDecorator } from \'shared/config/storybook/decorators/StoreDecorator\';\n'
    + 'import { Code } from \'./Code\';\n'
    + '\n'
    + 'export default {\n'
    + '  title: \'pages/Code\',\n'
    + '  component: Code,\n'
    + '  argTypes: {},\n'
    + '} as ComponentMeta<typeof Code>;\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
    + '\n'
    + 'export const Normal = Template.bind({});\n'
    + 'Normal.args = {\n'
    + '  code: \'\'\n'
    + '};\n'
    + '\n'
    + 'export const Dark = Template.bind({});\n'
    + 'Dark.decorators = [ThemeDecorator(Theme.DARK)];',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
