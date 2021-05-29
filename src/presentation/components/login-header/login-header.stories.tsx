import { Story, Meta } from '@storybook/react';

import { LoginHeader, LoginHeaderProps } from './login-header';

export default {
  title: 'Components/LoginHeader',
  component: LoginHeader,
} as Meta;

const Template: Story<LoginHeaderProps> = (args) => <LoginHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
